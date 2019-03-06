import React, { Component } from 'react';
import { Container, Grid, Segment } from 'semantic-ui-react';
import SearchBar from '../src/components/SearchBar';
import News from '../src/components/News';

import { getNews } from '../src/actions';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            news: []
        };
    }
    componentDidMount() {
        this.initNews();
    }

    initNews = async () => {
        const data = await getNews();
        this.setState({ news: data.entries.slice(0, 3) });
    };

    handleResultSelect = player => {
        const { router } = this.props;
        router.push(`/profile/${player.username}`);
    };

    render() {
        return (
            <Container
                textAlign="center"
                style={{
                    paddingTop: '100px',
                    paddingBottom: '100px'
                }}
            >
                <Grid centered textAlign="center">
                    <Grid.Row
                        as={Segment}
                        columns="1"
                        style={{ color: 'white', backgroundColor: 'rgba(61, 74, 133, 0.3)' }}
                    >
                        <Grid.Column textAlign="center">
                            <h1>Fortnite Boards</h1>
                        </Grid.Column>
                        <Grid.Column textAlign="center">
                            <Container text>
                                <h4>
                                    Welcome to Fortnite Boards! Search player stats by battle tag or
                                    build your own Leaderboard and share to your friends!
                                </h4>
                            </Container>
                        </Grid.Column>

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

                    <Grid.Row
                        as={Segment}
                        style={{ color: 'white', backgroundColor: 'rgba(61, 74, 133, 0.3)' }}
                    >
                        <h3>News</h3>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <News itemsPerRow={3} maxItems={3} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        );
    }
}

export default Index;
