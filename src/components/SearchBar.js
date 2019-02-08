import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid, Label } from "semantic-ui-react";

const resultRenderer = ({ uid, username }) => (
  <Label key={uid} content={username} />
);

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      isLoading: false
    };
  }

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => this.setState({ isLoading: false, value: "" });

  handleResultSelect = async (e, { result }) => {
    this.setState({ value: result.username, isLoading: true });
    await this.props.handleRouteChange(result.username);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value }, () => {
      // reset loading if empty
      if (this.state.value.length < 1) return this.resetComponent();

      // fetch users by username
      this.props.fetchByUsername(this.state.value, () => {
        this.setState({ isLoading: false });
        // prefetch first result
        const { results } = this.props;
        if (results.length) {
          const firstResult = results[0].username;
          this.props.prefetchRoute(firstResult);
        }
      });
    });
  };

  render() {
    const { isLoading, value } = this.state;
    const { results } = this.props;
    return (
      <Search
        input={{ fluid: true }}
        icon="arrow circle right"
        loading={isLoading}
        placeholder={"Enter your Epic username"}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        resultRenderer={resultRenderer}
        value={value}
        showNoResults={false}
      />
    );
  }
}
