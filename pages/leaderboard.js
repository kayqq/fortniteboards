import React, { Component, useState } from 'react';
import _ from 'lodash';
import copy from 'copy-to-clipboard';

import { Container, Grid, Icon, Popup, Button, Input, Header, Menu } from 'semantic-ui-react';
import SearchBar from '../src/components/SearchBar';
import { getProfileByUsername, getProfileByUid } from '../src/actions';

import Board from '../src/components/Board';

// show awards, i.e. most kills, most wins, highest kd etc etc in separate div
// share / reset / refresh buttons

const CopyLinkPopup = ({ children }) => {
    const [isCopied, setCopied] = useState(false);
    const [link, setLink] = useState('');

    const handleCopyClipboard = link => {
        const didCopy = copy(link);
        setCopied(didCopy);
    };

    return (
        <Popup
            style={{ width: '100%' }}
            hideOnScroll
            hoverable
            position="top center"
            onOpen={() => setLink(location.href)}
            onClose={() => setCopied(false)}
            content={
                <Grid textAlign="center">
                    <Grid.Row textAlign="left">
                        <Grid.Column textAlign="left">
                            <Header as="h5" color={isCopied ? 'green' : 'grey'}>
                                {isCopied ? 'Link copied!' : 'Link to custom leaderboard: '}
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ paddingTop: '0px' }}>
                        <Grid.Column>
                            <Input value={link} />
                            <Button
                                icon={isCopied ? 'check' : 'linkify'}
                                color={isCopied ? 'green' : 'grey'}
                                compact
                                onClick={() => handleCopyClipboard(link)}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            }
            trigger={children}
        />
    );
};

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
            column: null,
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

        initialPlayers = await Promise.all(
            usernames.map(username => getProfileByUsername(username))
        );

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
        const { players, column, mode, direction } = this.state;
        // Check if already added to board
        if (this.isPlayerSelected(player.uid)) return;
        // Not duplicate, get profile and add
        const newPlayer = await getProfileByUid(player.uid);
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
        const { columns, mode, players, loading } = this.state;

        return (
            <Container
                text
                textAlign="center"
                style={{
                    paddingTop: '100px',
                    paddingBottom: '100px'
                    // height: '100%'
                }}
            >
                <Grid centered textAlign="center">
                    <Grid.Row>
                        <h3>Leaderboards</h3>
                    </Grid.Row>
                    <Grid.Row columns="1">
                        <Grid.Column
                            mobile="16"
                            computer="6"
                            largeScreen="6"
                            tablet="6"
                            widescreen="6"
                        >
                            <SearchBar handleResultSelect={this.addPlayer} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row className="compact">
                        <Menu fluid borderless>
                            <Menu.Item position="right" as="a">
                                <CopyLinkPopup>
                                    <span>
                                        Share <Icon name="share" />
                                    </span>
                                </CopyLinkPopup>
                            </Menu.Item>
                            <Menu.Item
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
