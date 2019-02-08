import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";

import SearchBar from "../src/components/SearchBar";
import { fetchByUsername, getProfile } from "../src/actions";
import { Container, Grid, Segment } from "semantic-ui-react";

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = { players: [] };
  }

  handleRouteChange = async username => {
    const { players } = this.state;
    const newPlayer = await getProfile(username);
    this.setState({ players: [...players, newPlayer] });
    console.log(newPlayer);
    // need to reset seach component after fetch
  };

  prefetchRoute = username => {
    this.props.router.prefetch(`/profile/${username}`);
  };

  render() {
    const { searchResults, fetchByUsername } = this.props;

    const debouncedfetchByUsername = _.debounce(fetchByUsername, 500, {
      maxWait: 1000
    });

    return (
      <React.Fragment>
        <Container
          textAlign="center"
          style={{
            paddingTop: "200px",
            paddingBottom: "100px",
            height: "100%"
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
                  handleRouteChange={this.handleRouteChange}
                  prefetchRoute={this.prefetchRoute}
                  fetchByUsername={debouncedfetchByUsername}
                  results={searchResults}
                />
              </Container>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Segment
                padded
                style={{
                  backgroundColor: "white",
                  height: "200px"
                }}
              >
                <h2>NEWS</h2>
                <h2>NEWS</h2>
                <h2>NEWS</h2>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchResults: state.search.searchResults
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchByUsername }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
