import React from 'react';
import { Header, Grid, Image, Card } from 'semantic-ui-react';

const TotalStatsTable = ({ username, kd, kills, wins, winrate, matches }) => {
    return (
        <Grid>
            <Card raised fluid style={{ backgroundColor: '#6c80a2' }}>
                <Card.Content>
                    <Image
                        bordered
                        floated="right"
                        size="tiny"
                        src="https://pm1.narvii.com/6918/222ae5aa45c92f4ce6b86e39d3be5c0385473d9er1-928-760v2_hq.jpg"
                    />
                    <Card.Header>
                        <Header as="h1" style={{ color: 'white' }}>
                            {username}
                            <Header.Subheader>Season 7</Header.Subheader>
                        </Header>
                    </Card.Header>
                    <Card.Meta>{matches} Matches</Card.Meta>
                </Card.Content>
            </Card>
            <Grid.Row textAlign="center" style={{ backgroundColor: '#6c80a2', color: 'white' }}>
                <Grid.Column>Totals</Grid.Column>
            </Grid.Row>

            <Grid.Row
                style={{
                    backgroundColor: '#2c3c57',
                    color: 'white',
                    height: '200px',
                    marginBottom: '20px'
                }}
                columns="2"
            >
                <Grid.Column textAlign="center" verticalAlign="middle">
                    <Header size="medium" style={{ color: 'white' }}>
                        {wins}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Wins</Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                    <Header size="medium" style={{ color: 'white' }}>
                        {winrate}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Win %</Header.Subheader>
                    </Header>
                </Grid.Column>

                <Grid.Column textAlign="center" verticalAlign="middle">
                    <Header size="medium" style={{ color: 'white' }}>
                        {kills}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Kills</Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                    <Header size="medium" style={{ color: 'white' }}>
                        {kd}
                        <Header.Subheader style={{ color: '#92a2bd' }}>K/D</Header.Subheader>
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default TotalStatsTable;
