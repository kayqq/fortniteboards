import React from 'react';
import { Grid } from 'semantic-ui-react';
import ModeHeader from './ModeHeader';
import StatsHeader from './StatsHeader';
import Player from './Player';

const Index = ({ columns, players, removePlayer, handleModeChange, mode }) => {
    return (
        <Grid style={{ backgroundColor: '#2c3c57', color: 'white' }}>
            <ModeHeader mode={mode} handleModeChange={handleModeChange} />
            <StatsHeader columns={columns} />

            {players.map((player, index) => (
                <Player
                    key={index}
                    columns={columns}
                    player={player}
                    mode={mode}
                    boardIndex={index}
                    removePlayer={removePlayer}
                />
            ))}
        </Grid>
    );
};

export default Index;
