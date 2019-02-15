import React, { Component } from 'react';

import { Grid } from 'semantic-ui-react';
import ModeHeader from './ModeHeader';
import StatsHeader from './StatsHeader';
import Player from './Player';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = { mode: 'solo' };
    }

    handleModeChange = direction => {
        const { mode } = this.state;
        let nextMode = '';
        switch (mode) {
            case 'solo':
                nextMode = direction === 'forward' ? 'duo' : 'squad';
                break;
            case 'duo':
                nextMode = direction === 'forward' ? 'squad' : 'solo';
                break;
            case 'squad':
                nextMode = direction === 'forward' ? 'solo' : 'duo';
                break;
            default:
                break;
        }
        this.setState({ mode: nextMode });
    };

    render() {
        const { players } = this.props;
        const { mode } = this.state;
        const columns = [
            { header: 'Player', accessor: 'username' },
            { header: 'K/D', accessor: 'kd' },
            { header: 'Wins', accessor: 'placetop1' },
            { header: 'Kills', accessor: 'kills' },
            { header: 'Win %', accessor: 'winrate' },
            { header: 'Matches', accessor: 'matchesplayed' }
        ];
        return (
            <Grid style={{ backgroundColor: '#2c3c57', color: 'white' }}>
                {/* Render Mode Header / Selector */}
                <ModeHeader mode={mode} handleModeChange={this.handleModeChange} />

                {/* Render Column Header */}
                <StatsHeader columns={columns} />

                {/* Render Player stats */}
                {players.map((player, key) => (
                    <Player columns={columns} player={player} key={key} mode={mode} />
                ))}
            </Grid>
        );
    }
}
