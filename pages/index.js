import React, { Component } from 'react';
import { Container, Grid, Card, Segment } from 'semantic-ui-react';
import SearchBar from '../src/components/SearchBar';
import NewsCard from '../src/components/NewsCard';

import { getNews } from '../src/actions';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: []
        };
    }
    async componentDidMount() {
        const data = await getNews();
        this.setState({ news: data.entries.slice(0, 3) });
    }

    handleResultSelect = player => {
        this.props.router.push(`/profile/${player.username}`);
    };

    render() {
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
                    <Grid.Row as={Segment}>
                        <h3>Fortnite Boards</h3>
                        <Container>
                            <h4>
                                Welcome to Fortnite Boards! Search player stats by battle tag or
                                build your own Leaderboard and share to your friends!
                            </h4>
                        </Container>

                        <Grid.Column
                            mobile="16"
                            computer="6"
                            largeScreen="6"
                            tablet="6"
                            widescreen="6"
                            style={{ paddingBottom: '1em', paddingTop: '1em' }}
                        >
                            <SearchBar handleResultSelect={this.handleResultSelect} />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row as={Segment}>
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
