import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

const StatsTable = ({ kd, kills, wins, winrate, matches, mode }) => {
    let backgroundColor = '';
    switch (mode) {
        case 'SOLO':
            backgroundColor = '#14c8ff';
            break;
        case 'DUO':
            backgroundColor = '#f3af19';
            break;
        case 'SQUAD':
            backgroundColor = '#9d4dbb';
            break;
        default:
            break;
    }

    return (
        <Grid
            style={{
                backgroundColor: '#2c3c57',
                color: 'white',
                marginBottom: '16px',
                borderRadius: '4px'
            }}
        >
            <Grid.Row
                style={{ backgroundColor, borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }}
            >
                <Grid.Column>{mode}</Grid.Column>
            </Grid.Row>
            <Grid.Row columns="5" stretched style={{ height: '80px' }}>
                <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
                    <Header size="tiny" style={{ color: 'white' }}>
                        {kd}
                        <Header.Subheader style={{ color: '#92a2bd' }}>K/D</Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
                    <Header size="tiny" style={{ color: 'white' }}>
                        {wins}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Wins</Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
                    <Header size="tiny" style={{ color: 'white' }}>
                        {kills}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Kills</Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
                    <Header size="tiny" style={{ color: 'white' }}>
                        {winrate}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Win %</Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column className="compact" textAlign="center" verticalAlign="middle">
                    <Header size="tiny" style={{ color: 'white' }}>
                        {matches}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Matches</Header.Subheader>
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

export default StatsTable;
