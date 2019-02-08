import React, { Component } from "react";
// import Link from "next/link";
import { Link } from "../../routes";
import SearchBar from "../components/SearchBar";

import {
  Button,
  Container,
  Menu,
  Icon,
  Segment,
  Visibility,
  Responsive,
  Grid
} from "semantic-ui-react";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    };
  }

  render() {
    return (
      <Segment
        style={{ backgroundColor: "#4a4a4a", color: "white" }}
        textAlign="center"
        vertical
      >
        <Container>
          <Menu
            pointing
            secondary
            size="large"
            style={{ backgroundColor: "#4a4a4a", color: "white" }}
          >
            {this.state.searchVisible ? (
              <SearchBar />
            ) : (
              <React.Fragment>
                <Menu.Item active style={{ color: "white" }}>
                  <Link route="/">
                    <span>Home</span>
                  </Link>
                </Menu.Item>
                <Menu.Item style={{ color: "white" }}>
                  <Link route="/leaderboard">
                    <span>Create</span>
                  </Link>
                </Menu.Item>
                {/* <Responsive {...Responsive.onlyMobile} maxWidth={425}>
                  <Menu.Item
                    as="a"
                    icon
                    position="right"
                    active
                    style={{ color: "grey" }}
                    onClick={() => this.setState({ searchVisible: true })}
                  >
                    <Icon name="search" size="large" />
                  </Menu.Item>
                </Responsive> */}
              </React.Fragment>
            )}

            {/* DESKTOP SEARCH */}
            <Responsive
              as={Menu.Item}
              style={{ width: "40px" }}
              minWidth={Responsive.onlyTablet.minWidth}
              icon
              style={{ color: "grey" }}
              onClick={() => console.log("clicked!")}
            >
              <SearchBar />
            </Responsive>

            {/* BARS */}
            <Responsive
              as={Menu.Item}
              icon
              position="right"
              style={{ color: "grey" }}
              onClick={() => console.log("clicked!")}
              maxWidth={Responsive.onlyMobile.maxWidth}
            >
              <Icon name="bars" size="large" />
            </Responsive>
          </Menu>
        </Container>
      </Segment>
    );
  }
}
