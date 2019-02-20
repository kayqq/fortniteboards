import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { Container, Grid } from 'semantic-ui-react';
import SearchBar from '../src/components/SearchBar';
import { fetchByUsername, getProfile } from '../src/actions';

import Board from '../src/components/board';

// show awards, i.e. most kills, most wins, highest kd etc etc in separate div

class Leaderboard extends Component {
    static async getInitialProps({ store, query, pathname, asPath, req }) {
        const { usernames, entries } = query;
        let initialPlayers = [];

        if (!usernames) return { initialPlayers };

        if (entries <= 1) {
            initialPlayers = await getProfile(usernames);
        } else {
            initialPlayers = await Promise.all(usernames.map(username => getProfile(username)));
        }
        return { initialPlayers, entries };
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

    handleSort = accessor => () => {
        const { column, players, direction, mode } = this.state;
        if (column !== accessor) {
            let sortedPlayers = [];
            if (accessor == 'username') {
                sortedPlayers = _.sortBy(this.state.players, o => o.username);
            } else {
                sortedPlayers = _.sortBy(players, o => o.stats[`${accessor}_${mode}`]);
            }
            this.setState(
                {
                    column: accessor,
                    players: sortedPlayers,
                    direction: 'ascending'
                },
                () => this.updateURL()
            );

            return;
        }

        this.setState(
            {
                players: players.reverse(),
                direction: direction === 'ascending' ? 'descending' : 'ascending'
            },
            () => this.updateURL()
        );
    };

    componentDidMount() {
        const { initialPlayers, entries } = this.props;
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
            players: entries <= 1 ? [...players, initialPlayers] : [...players, ...initialPlayers],
            entries: entries
        });
    }

    addPlayer = async username => {
        const { players } = this.state;

        const newPlayer = await getProfile(username);
        const updatedPlayers = [...players, newPlayer];
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

    updateURL = () => {
        const { router } = this.props;
        const { players } = this.state;
        const usernames = players.map(player => player.username);
        router.push({
            pathname: '/leaderboard',
            query: { entries: usernames.length, usernames: usernames },
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
            <div>
                <Container
                    text
                    textAlign="center"
                    style={{
                        paddingTop: '200px',
                        paddingBottom: '100px',
                        height: '100%'
                    }}
                >
                    <h1>Board</h1>
                    <Grid columns="1" centered textAlign="center">
                        <Grid.Column
                            mobile="16"
                            computer="6"
                            largeScreen="6"
                            tablet="6"
                            widescreen="6"
                        >
                            <Container>
                                <SearchBar
                                    checkDuplicateSelect={this.isPlayerSelected}
                                    handleResultSelect={this.addPlayer}
                                    fetchByUsername={debouncedfetchByUsername}
                                    results={searchResults}
                                />
                            </Container>
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
            </div>
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
