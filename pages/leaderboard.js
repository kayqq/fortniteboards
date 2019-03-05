import React, { Component } from 'react';
import _ from 'lodash';

import SearchBar from '../src/components/SearchBar';
import Board from '../src/components/Board';
import CopyLinkPopup from '../src/components/CopyLinkPopup';

import { getStatsByUsername, getStatsByUid } from '../src/actions';
import { Container, Segment, Grid, Icon, Menu } from 'semantic-ui-react';

class Leaderboard extends Component {
    static async getInitialProps({ query }) {
        let { usernames } = query;
        const { mode } = query;
        if (!usernames) return { usernames: [] };
        // Format into Array
        usernames = typeof usernames == 'string' ? [usernames] : usernames;
        return { usernames, mode };
    }

    constructor(props) {
        super(props);
        this.state = {
            players: [],
            mode: props.mode || 'solo',
            columns: [],
            activeColumn: null,
            direction: null,
            loading: null
        };
    }

    componentDidMount() {
        this.setState({ url: location.href });
        this.initColumns();

        const { usernames } = this.props;
        if (usernames.length) {
            this.initPlayers(usernames);
        }
    }

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

    initPlayers = async usernames => {
        let initialPlayers = [];
        // Start load player stats
        this.setState({
            loading: true,
            players: new Array(usernames.length).fill(null)
        });

        initialPlayers = await Promise.all(usernames.map(username => getStatsByUsername(username)));

        // End load player stats
        this.setState(
            {
                players: [...initialPlayers],
                loading: false
            },
            () => this.updateURL()
        );
    };

    refreshBoard = () => {
        const { players } = this.state;
        const usernames = players.map(player => player.username);
        this.initPlayers(usernames);
    };

    addPlayer = async player => {
        const { players, activeColumn, mode, direction } = this.state;
        // Check if already added to board
        if (this.isPlayerSelected(player.uid)) return;
        // Not duplicate, get profile and add
        const newPlayer = await getStatsByUid(player.uid);
        let updatedPlayers = [...players, newPlayer];

        // if pre-sorted then apply sort setting to updated players
        if (activeColumn !== null) {
            updatedPlayers = this.sortPlayers(updatedPlayers, activeColumn, mode, direction);
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
        const { activeColumn, players, direction, mode } = this.state;
        // Reverse order if direction set, else default to desc
        let sortDirection = direction === 'desc' ? 'asc' : 'desc';
        let sortedColumn = activeColumn;

        // Default to desc order on column switch
        if (activeColumn !== accessor) {
            // Default to asc order if username column
            sortDirection = accessor == 'username' ? 'asc' : 'desc';
            // Set sorted column name
            sortedColumn = accessor;
        }
        // Sort players
        const sortedPlayers = this.sortPlayers(players, accessor, mode, sortDirection);
        this.setState(
            {
                activeColumn: sortedColumn,
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

    isPlayerSelected = uid => {
        const { players } = this.state;
        return players.find(player => player.uid === uid);
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

    render() {
        const { activeColumn, columns, mode, players, loading } = this.state;

        return (
            <Container
                textAlign="center"
                style={{
                    paddingTop: '100px',
                    paddingBottom: '100px'
                    // height: '100%'
                }}
            >
                <Grid centered textAlign="center">
                    <Grid.Row
                        textAlign="center"
                        columns="1"
                        as={Segment}
                        style={{
                            color: 'white',
                            backgroundColor: 'rgba(61, 74, 133, 0.3)'
                            // backgroundColor: 'rgba(46, 49, 49, .6)'
                        }}
                    >
                        <Grid.Column textAlign="center">
                            <h1>Leaderboards</h1>
                        </Grid.Column>

                        <Grid.Column
                            mobile="16"
                            computer="6"
                            largeScreen="6"
                            tablet="6"
                            widescreen="6"
                            style={{ paddingBottom: '1em', paddingTop: '1em' }}
                        >
                            <SearchBar handleResultSelect={this.addPlayer} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row className="compact">
                        <Menu
                            tabular
                            fluid
                            style={{ border: 'none', backgroundColor: 'rgba(61, 74, 133, 0)' }}
                        >
                            <Menu.Item
                                fitted="vertically"
                                position="right"
                                as="a"
                                style={{
                                    backgroundColor: 'rgba(61, 74, 133, 0.3)',
                                    borderRadius: '0.28571429rem',
                                    color: 'white'
                                }}
                            >
                                <CopyLinkPopup>
                                    <span>
                                        Share <Icon name="share" />
                                    </span>
                                </CopyLinkPopup>
                            </Menu.Item>
                            <Menu.Item
                                fitted="vertically"
                                style={{
                                    marginLeft: '5px',
                                    borderRadius: '0.28571429rem',
                                    backgroundColor: 'rgba(61, 74, 133, 0.3)',
                                    color: 'white'
                                }}
                                as="a"
                                disabled={loading}
                                onClick={() => this.refreshBoard()}
                            >
                                <span>
                                    Refresh <Icon name="sync alternate" />
                                </span>
                            </Menu.Item>
                        </Menu>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column textAlign="center">
                            <Board
                                activeColumn={activeColumn}
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

export default Leaderboard;
