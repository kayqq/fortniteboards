import React from 'react';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import ModeHeader from './ModeHeader';
import StatsHeader from './StatsHeader';
import Player from './Player';

const Index = ({
    activeColumn,
    columns,
    players,
    removePlayer,
    handleModeChange,
    mode,
    loading
}) => {
    return (
        <React.Fragment>
            <Grid
                style={{
                    backgroundColor: '#2c3c57',
                    color: 'white',
                    borderTopLeftRadius: '0.28571429rem',
                    borderTopRightRadius: '0.28571429rem'
                }}
            >
                <ModeHeader mode={mode} handleModeChange={handleModeChange} />
            </Grid>

            <Dimmer.Dimmable
                as={Grid}
                dimmed={loading}
                style={{ backgroundColor: '#2c3c57', color: 'white' }}
            >
                <Dimmer active={loading}>
                    <Loader>Loading...</Loader>
                </Dimmer>
                <StatsHeader activeColumn={activeColumn} columns={columns} />

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
            </Dimmer.Dimmable>
        </React.Fragment>
    );
};

export default Index;
