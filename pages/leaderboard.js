import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import _ from "lodash";

import SearchBar from "../src/components/SearchBar";
import { fetchByUsername, getProfile } from "../src/actions";
import { Container, Grid, Icon, Header } from "semantic-ui-react";

// show awards, i.e. most kills, most wins, highest kd etc etc in separate div

const Board = ({ players, mode, handleModeChange }) => {
  // const columns = {
  //   "K/D": "kd",
  //   Wins: "placetop1",
  //   Kills: "kills",
  //   "Win %": "winrate",
  //   Matches: "matchesplayed"
  // };

  const columns = [
    { header: "K/D", accessor: "kd" },
    { header: "Wins", accessor: "placetop1" },
    { header: "Kills", accessor: "kills" },
    { header: "Win %", accessor: "winrate" },
    { header: "Matches", accessor: "matchesplayed" }
  ];
  let backgroundColor = "";
  let title = "";
  switch (mode) {
    case "solo":
      backgroundColor = "#14c8ff";
      title = "Solo";
      break;
    case "duo":
      backgroundColor = "#f3af19";
      title = "Duo";
      break;
    case "squad":
      backgroundColor = "#9d4dbb";
      title = "Squad";
      break;
    default:
      break;
  }
  return (
    <Grid style={{ backgroundColor: "#2c3c57", color: "white" }}>
      {/* Render Mode Header / Selector */}
      <Grid.Row
        columns={columns.length}
        style={{ backgroundColor: backgroundColor }}
      >
        <Grid.Column
          as="span"
          floated="left"
          textAlign="left"
          onClick={() => handleModeChange("reverse")}
        >
          <Icon name="angle left" />
        </Grid.Column>
        <Grid.Column as="span" textAlign="center">
          {title}
        </Grid.Column>
        <Grid.Column
          as="span"
          floated="right"
          textAlign="right"
          onClick={() => handleModeChange("forward")}
        >
          <Icon name="angle right" />
        </Grid.Column>
      </Grid.Row>

      {/* Render Column Header */}
      <Grid.Row columns="5" stretched>
        {columns.map(column => (
          <Grid.Column textAlign="center" verticalAlign="middle">
            <Header.Subheader style={{ color: "#92a2bd" }}>
              {column.header}
            </Header.Subheader>
          </Grid.Column>
        ))}
      </Grid.Row>

      {/* Render Player stats */}
      {players.map(player => (
        <Grid.Row columns="5" stretched>
          {columns.map(column => (
            <Grid.Column textAlign="center" verticalAlign="middle">
              <Header size="medium" style={{ color: "white" }}>
                {player.stats[`${column.accessor}_${mode}`]}
              </Header>
            </Grid.Column>
          ))}
        </Grid.Row>
      ))}
    </Grid>
  );
};

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    this.state = { players: [], mode: "solo" };
  }

  handleModeChange = direction => {
    const { mode } = this.state;
    let nextMode = "";
    switch (mode) {
      case "solo":
        nextMode = direction === "forward" ? "duo" : "squad";
        break;
      case "duo":
        nextMode = direction === "forward" ? "squad" : "solo";
        break;
      case "squad":
        nextMode = direction === "forward" ? "solo" : "duo";
        break;
      default:
        break;
    }
    this.setState({ mode: nextMode });
  };

  isPlayerSelected = (username, players) =>
    players.find(player => player.username === username);

  handleResultSelect = async (username, resetSearchFn) => {
    const { players } = this.state;

    // Reset component if username is already in table
    if (this.isPlayerSelected(username, players)) return resetSearchFn();

    // Get profile of username and add to table
    const newPlayer = await getProfile(username);
    this.setState({ players: [...players, newPlayer] }, () => resetSearchFn());
    console.log(this.state.players);
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
                  handleResultSelect={this.handleResultSelect}
                  fetchByUsername={debouncedfetchByUsername}
                  results={searchResults}
                />
              </Container>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Board
                handleModeChange={this.handleModeChange}
                players={this.state.players}
                mode={this.state.mode}
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

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchByUsername }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Leaderboard);
