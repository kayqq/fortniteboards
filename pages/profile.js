import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import { getProfileByUsername } from '../src/actions';

import ProfileHeader from '../src/components/Profile/ProfileHeader';
import StatsTable from '../src/components/Profile/StatsTable';
import TotalStatsTable from '../src/components/Profile/TotalStatsTable';

class Profile extends Component {
    static async getInitialProps({ query }) {
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
    }

    render() {
        const { profile } = this.props;
        const { stats, totals } = profile;
        const season = profile.window.charAt(profile.window.length - 1);

        return (
            <div>
                <Container
                    text
                    style={{
                        paddingTop: '100px',
                        paddingBottom: '100px',
                        height: '100%'
                    }}
                >
                    <ProfileHeader
                        username={profile.username}
                        season={season}
                        matches={totals.matchesplayed}
                    />

                    <TotalStatsTable
                        kd={totals.kd}
                        kills={totals.kills}
                        wins={totals.wins}
                        winrate={totals.winrate}
                    />

                    <StatsTable
                        kd={stats.kd_solo}
                        kills={stats.kills_solo}
                        wins={stats.placetop1_solo}
                        winrate={stats.winrate_solo}
                        matches={stats.matchesplayed_solo}
                        mode="SOLO"
                    />

                    <StatsTable
                        kd={stats.kd_duo}
                        kills={stats.kills_duo}
                        wins={stats.placetop1_duo}
                        winrate={stats.winrate_duo}
                        matches={stats.matchesplayed_duo}
                        mode="DUO"
                    />

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
