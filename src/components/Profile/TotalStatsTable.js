import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

const TotalStatsTable = ({ kd, kills, wins, winrate }) => {
    return (
        <Grid style={{ marginBottom: '16px' }}>
            <Grid.Row textAlign="center" style={{ backgroundColor: '#6c80a2', color: 'white' }}>
                <Grid.Column>Totals</Grid.Column>
            </Grid.Row>

            <Grid.Row
                style={{
                    backgroundColor: '#2c3c57',
                    color: 'white',
                    height: '200px'
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
