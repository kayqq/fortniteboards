import React, { Component } from 'react';
import _ from 'lodash';
import { Container, Grid, Card } from 'semantic-ui-react';
import SearchBar from '../src/components/SearchBar';
import NewsCard from '../src/components/NewsCard';

import { getNews, getUsernames } from '../src/actions';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [],
            news: []
        };
    }
    async componentDidMount() {
        const data = await getNews();
        this.setState({ news: data.entries.slice(0, 3) });
    }

    handleResultSelect = username => {
        this.props.router.push(`/profile/${username}`);
    };

    prefetchRoute = username => {
        this.props.router.prefetch(`/profile/${username}`);
    };

    handleUsernameSearch = async (username, callback) => {
        const usernames = await getUsernames(username);
        const formattedResults = usernames.map((result, index) => {
            result.key = index;
            result.title = result.username;
            return result;
        });
        callback();
        this.setState({ results: formattedResults });
    };

    render() {
        const { results } = this.state;

        // debounced fetch
        const debouncedfetchByUsername = _.debounce(this.handleUsernameSearch, 500, {
            maxWait: 1000
        });

        return (
            <Container
                textAlign="center"
                style={{
                    paddingTop: '100px',
                    paddingBottom: '100px',
                    height: '100%'
                }}
            >
                <Grid centered textAlign="center">
                    <Grid.Row>
                        <h3>Fortnite Boards</h3>
                    </Grid.Row>
                    <Grid.Row>
                        <h4>
                            Welcome to Fortnite Boards! Search player stats by battle tag or build
                            your own Leaderboard and share to your friends!
                        </h4>
                    </Grid.Row>
                    <Grid.Row style={{ backgroundColor: 'grey' }}>
                        <Grid.Column
                            mobile="16"
                            computer="6"
                            largeScreen="6"
                            tablet="6"
                            widescreen="6"
                        >
                            <SearchBar
                                handleResultSelect={this.handleResultSelect}
                                prefetchRoute={this.prefetchRoute}
                                fetchByUsername={debouncedfetchByUsername}
                                results={results}
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row style={{ backgroundColor: 'green' }}>
                        <h3>News</h3>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Card.Group stackable itemsPerRow={3}>
                                {this.state.news.map(article => (
                                    <NewsCard
                                        key={article.title}
                                        imagesrc={article.image}
                                        title={article.title}
                                        description={article.body}
                                        date={article.time}
                                    />
                                ))}
                            </Card.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Index;
