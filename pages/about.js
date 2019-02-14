// import Link from "next/link";
// import Head from "next/head";
import React, { Component } from "react";
import { connect } from "react-redux";

import { Link, Router } from "../routes";
import { load, unload } from "../src/actions";

import { Container, Header } from "semantic-ui-react";

export class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Container text style={{ marginTop: "2em" }}>
          <Header as="h1">ABOUT PAGE</Header>
        </Container>
      </div>
    );
  }
}

export default About;
