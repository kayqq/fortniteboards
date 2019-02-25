import React, { Component } from 'react';
import { Container, Header, Grid, Divider } from 'semantic-ui-react';

import { getProfileByUsername } from '../src/actions';

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
        <Grid style={{ backgroundColor: '#2c3c57', color: 'white' }}>
            <Grid.Row style={{ backgroundColor }}>
                <Grid.Column>{mode}</Grid.Column>
            </Grid.Row>
            {/* <Divider clearing /> */}

            <Grid.Row columns="5" stretched>
                <Grid.Column textAlign="center" verticalAlign="middle">
                    <Header size="medium" style={{ color: 'white' }}>
                        {kd}
                        <Header.Subheader style={{ color: '#92a2bd' }}>K/D</Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                    <Header size="medium" style={{ color: 'white' }}>
                        {wins}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Wins</Header.Subheader>
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
                        {winrate}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Win %</Header.Subheader>
                    </Header>
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="middle">
                    <Header size="medium" style={{ color: 'white' }}>
                        {matches}
                        <Header.Subheader style={{ color: '#92a2bd' }}>Matches</Header.Subheader>
                    </Header>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    );
};

class Profile extends Component {
    static async getInitialProps({ store, query, pathname, asPath, req }) {
        const profile = (await getProfileByUsername(query.username)) || {};
        if (!profile.uid) {
            const err = new Error();
            err.code = 'ENOENT';
            throw err;
        }
        return { profile };
    }

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { profile } = this.props;
        const { stats, totals } = profile;

        return (
            <div>
                <Container text style={{ marginTop: '1em' }}>
                    <Grid style={{ backgroundColor: '#2c3c57', color: 'white' }}>
                        <Grid.Row stretched style={{ backgroundColor: '#6c80a2' }}>
                            <Grid.Column>
                                {/* <Image
                                    src="https://pm1.narvii.com/6918/222ae5aa45c92f4ce6b86e39d3be5c0385473d9er1-928-760v2_hq.jpg"
                                    size="small"
                                    circular
                                /> */}
                                <Grid.Row>
                                    <Header as="h1" style={{ color: 'white' }}>
                                        {profile.username}
                                        <Header.Subheader>Season 7</Header.Subheader>
                                    </Header>
                                </Grid.Row>
                                <Grid.Row>{totals.matchesplayed} Matches</Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row style={{ height: '200px' }} columns="2">
                            <Grid.Column textAlign="center" verticalAlign="middle">
                                <Header size="medium" style={{ color: 'white' }}>
                                    {totals.wins}
                                    <Header.Subheader style={{ color: '#92a2bd' }}>
                                        Wins
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column textAlign="center" verticalAlign="middle">
                                <Header size="medium" style={{ color: 'white' }}>
                                    {totals.winrate}
                                    <Header.Subheader style={{ color: '#92a2bd' }}>
                                        Win %
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>

                            <Grid.Column textAlign="center" verticalAlign="middle">
                                <Header size="medium" style={{ color: 'white' }}>
                                    {totals.kills}
                                    <Header.Subheader style={{ color: '#92a2bd' }}>
                                        Kills
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                            <Grid.Column textAlign="center" verticalAlign="middle">
                                <Header size="medium" style={{ color: 'white' }}>
                                    {totals.kd}
                                    <Header.Subheader style={{ color: '#92a2bd' }}>
                                        K/D
                                    </Header.Subheader>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>

                    <Divider hidden />
                    <StatsTable
                        kd={stats.kd_solo}
                        kills={stats.kills_solo}
                        wins={stats.placetop1_solo}
                        winrate={stats.winrate_solo}
                        matches={stats.matchesplayed_solo}
                        mode="SOLO"
                    />

                    <Divider hidden />

                    <StatsTable
                        kd={stats.kd_duo}
                        kills={stats.kills_duo}
                        wins={stats.placetop1_duo}
                        winrate={stats.winrate_duo}
                        matches={stats.matchesplayed_duo}
                        mode="DUO"
                    />

                    <Divider hidden />

                    <StatsTable
                        kd={stats.kd_squad}
                        kills={stats.kills_squad}
                        wins={stats.placetop1_squad}
                        winrate={stats.winrate_squad}
                        matches={stats.matchesplayed_squad}
                        mode="SQUAD"
                    />
                </Container>
            </div>
        );
    }
}

export default Profile;
