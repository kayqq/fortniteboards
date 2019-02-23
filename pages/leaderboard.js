import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Container, Grid, Icon } from 'semantic-ui-react';
import SearchBar from '../src/components/SearchBar';
import { fetchByUsername, getUsers, getProfile } from '../src/actions';

import Board from '../src/components/board';

// show awards, i.e. most kills, most wins, highest kd etc etc in separate div

class Leaderboard extends Component {
    static async getInitialProps({ query }) {
        let { usernames } = query;
        const { mode } = query;
        if (!usernames) return { usernames: [] };
        usernames = typeof usernames == 'string' ? [usernames] : usernames;
        return { usernames, mode };
    }

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            mode: props.mode || 'solo',
            columns: [],
            column: null,
            direction: null,
            loading: null
        };
    }

    async componentDidMount() {
        const { usernames } = this.props;
        let initialPlayers = [];
        // Initialize column headers
        this.initColumns();

        // Start load player stats
        this.setState({
            loading: true,
            players: usernames ? new Array(usernames.length).fill(null) : []
        });

        initialPlayers = await Promise.all(usernames.map(username => getProfile(username)));

        // End load player stats
        this.setState(
            {
                players: [...initialPlayers],
                loading: false
            },
            () => this.updateURL()
        );
    }

    addPlayer = async username => {
        const { players, column, mode, direction } = this.state;
        const newPlayer = await getProfile(username);
        let updatedPlayers = [...players, newPlayer];

        // if pre-sorted then apply sort setting to updated players
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
        this.setState({ mode: nextMode }, () => this.updateURL());
    };

    handleSort = accessor => () => {
        const { column, players, direction, mode } = this.state;

        // Reverse order if direction set, else default to desc
        let sortDirection = direction === 'desc' ? 'asc' : 'desc';
        let sortedColumn = column;

        // Default to desc order on column switch
        if (column !== accessor) {
            // Default to asc order if username column
            sortDirection = accessor == 'username' ? 'asc' : 'desc';
            // Set sorted column name
            sortedColumn = accessor;
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

    isPlayerSelected = username => {
        const { players } = this.state;
        return players.find(player => player.username === username);
    };

    updateURL = () => {
        const { router } = this.props;
        const { players, mode } = this.state;
        const usernames = players.map(player => player.username);
        router.replace({
            pathname: '/leaderboard',
            query: { mode: mode, usernames: usernames },
            options: { shallow: true }
        });
    };

    initColumns = () => {
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
            ]
        });
    };

    render() {
        const { columns, mode, players, loading } = this.state;
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
                <Grid centered textAlign="center">
                    <Grid.Row>
                        <h3>Leaderboards</h3>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column
                            mobile="16"
                            computer="6"
                            largeScreen="6"
                            tablet="6"
                            widescreen="6"
                        >
                            <SearchBar
                                checkDuplicateSelect={this.isPlayerSelected}
                                handleResultSelect={this.addPlayer}
                                fetchByUsername={debouncedfetchByUsername}
                                results={searchResults}
                            />
                            <Icon name="share" />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <Board
                                columns={columns}
                                mode={mode}
                                players={players}
                                removePlayer={this.removePlayer}
                                handleModeChange={this.changeMode}
                                loading={loading}
                            />
                        </Grid.Column>
                    </Grid.Row>
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
