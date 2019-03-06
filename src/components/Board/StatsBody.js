import React from 'react';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';
import StatsRow from './StatsRow';

const StatsBody = ({ columns, players, removePlayer, mode, loading }) => {
    return (
        <Dimmer.Dimmable
            as={Grid.Row}
            dimmed={loading}
            style={{
                backgroundColor: '#2c3c57',
                color: 'white',
                padding: '0',
                margin: '0'
            }}
        >
            <Dimmer active={loading}>
                <Loader>Loading...</Loader>
            </Dimmer>
            <Grid style={{ width: '100%', margin: '0', padding: '0' }}>
                {players.map((player, index) => (
                    <StatsRow
                        key={index}
                        columns={columns}
                        player={player}
                        mode={mode}
                        boardIndex={index}
                        removePlayer={removePlayer}
                    />
                ))}
            </Grid>
        </Dimmer.Dimmable>
    );
};

export default StatsBody;
