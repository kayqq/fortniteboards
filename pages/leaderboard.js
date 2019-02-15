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
    constructor(props) {
        super(props);

        this.state = { players: [], mode: 'solo' };
    }

    handleResultSelect = async (username, resetSearchFn) => {
        const { players } = this.state;

        // Reset component if username is already in table
        if (isPlayerSelected(username, players)) return resetSearchFn();

        // Get profile of username and add to table
        const newPlayer = await getProfile(username);
        this.setState({ players: [...players, newPlayer] }, () => resetSearchFn());

        // Helper function
        const isPlayerSelected = (username, players) =>
            players.find(player => player.username === username);
    };

    render() {
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
                    <h1>Leaderboard</h1>
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
                                    handleResultSelect={this.handleResultSelect}
                                    fetchByUsername={debouncedfetchByUsername}
                                    results={searchResults}
                                />
                            </Container>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Board players={this.state.players} />
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
