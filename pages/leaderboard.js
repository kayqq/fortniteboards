import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Container, Grid, Icon } from 'semantic-ui-react';
import SearchBar from '../src/components/SearchBar';
import { fetchByUsername, getProfile } from '../src/actions';

import Board from '../src/components/board';

// show awards, i.e. most kills, most wins, highest kd etc etc in separate div

class Leaderboard extends Component {
    static async getInitialProps({ store, query, pathname, asPath, req }) {
        const { usernames } = query;
        let initialPlayers = [];

        if (!usernames) return { initialPlayers };

        const players = typeof usernames == 'string' ? [usernames] : usernames;
        initialPlayers = await Promise.all(players.map(player => getProfile(player)));

        return { initialPlayers };
    }

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            mode: 'solo',
            columns: [],
            column: null,
            direction: null
        };
    }

    componentDidMount() {
        const { initialPlayers } = this.props;
        const { players } = this.state;
        this.setState({
            columns: [
                {
                    header: 'Player',
                    accessor: 'username',
                    sort: this.handleSort('username')
                },
                {
                    header: 'K/D',
                    accessor: 'kd',
                    sort: this.handleSort('kd')
                },
                {
                    header: 'Win %',
                    accessor: 'winrate',
                    sort: this.handleSort('winrate')
                },
                {
                    header: 'Kills',
                    accessor: 'kills',

                    sort: this.handleSort('kills')
                },
                {
                    header: 'Wins',
                    accessor: 'placetop1',
                    sort: this.handleSort('placetop1')
                }
            ],
            players: [...players, ...initialPlayers]
        });
    }

    addPlayer = async username => {
        const { players, column, mode, direction } = this.state;
        const newPlayer = await getProfile(username);
        let updatedPlayers = [...players, newPlayer];

        // if previous sorted then apply sort setting to updated players
        if (column !== null) {
            updatedPlayers = this.sortPlayers(updatedPlayers, column, mode, direction);
        }

        this.setState({ players: updatedPlayers }, () => this.updateURL());
    };

    removePlayer = index => {
        const { players } = this.state;
        const updatedPlayers = players.filter((player, i) => i !== index);
        this.setState({ players: updatedPlayers }, () => this.updateURL());
    };

    changeMode = direction => {
        const { mode } = this.state;
        let nextMode = '';
        switch (mode) {
            case 'solo':
                nextMode = direction === 'forward' ? 'duo' : 'squad';
                break;
            case 'duo':
                nextMode = direction === 'forward' ? 'squad' : 'solo';
                break;
            case 'squad':
                nextMode = direction === 'forward' ? 'solo' : 'duo';
                break;
            default:
                break;
        }
        this.setState({ mode: nextMode });
    };

    isPlayerSelected = username => {
        const { players } = this.state;
        return players.find(player => player.username === username);
    };

    handleSort = accessor => () => {
        const { column, players, direction, mode } = this.state;
        // Reverse order if direction set, else default to desc
        let sortDirection = direction === 'desc' ? 'asc' : 'desc';
        let sortedColumn = column;
        // First click default setting
        if (column !== accessor) {
            // Default to desc order, unless username column
            sortDirection = accessor == 'username' ? 'asc' : 'desc';
            sortedColumn = accessor; // Set sorted column name
        }
        // Sort players
        const sortedPlayers = this.sortPlayers(players, accessor, mode, sortDirection);

        this.setState(
            {
                column: sortedColumn,
                players: sortedPlayers,
                direction: sortDirection
            },
            () => this.updateURL()
        );
    };

    sortPlayers = (players, accessor, mode, direction) => {
        return accessor == 'username'
            ? _.orderBy(this.state.players, [o => o.username.toLowerCase()], [direction])
            : _.orderBy(players, o => o.stats[`${accessor}_${mode}`], [direction]);
    };

    updateURL = () => {
        const { router } = this.props;
        const { players } = this.state;
        const usernames = players.map(player => player.username);
        router.replace({
            pathname: '/leaderboard',
            query: { usernames: usernames },
            options: { shallow: true }
        });
    };

    render() {
        const { columns, mode, players } = this.state;
        const { searchResults, fetchByUsername } = this.props;
        const debouncedfetchByUsername = _.debounce(fetchByUsername, 500, {
            maxWait: 1000
        });
        return (
            <Container
                text
                textAlign="center"
                style={{
                    paddingTop: '100px',
                    paddingBottom: '100px',
                    height: '100%'
                }}
            >
                <h1>Board</h1>
                <Grid columns="1" centered textAlign="center">
                    <Grid.Column mobile="16" computer="6" largeScreen="6" tablet="6" widescreen="6">
                        <Container>
                            <SearchBar
                                checkDuplicateSelect={this.isPlayerSelected}
                                handleResultSelect={this.addPlayer}
                                fetchByUsername={debouncedfetchByUsername}
                                results={searchResults}
                            />
                        </Container>
                        <Icon name="share square" />
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <Board
                            columns={columns}
                            mode={mode}
                            players={players}
                            removePlayer={this.removePlayer}
                            handleModeChange={this.changeMode}
                        />
                    </Grid.Column>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        searchResults: state.search.searchResults
    };
};

const mapDispatchToProps = dispatch => bindActionCreators({ fetchByUsername }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Leaderboard);
