import React from 'react';
import { Grid } from 'semantic-ui-react';
import ModeHeader from './ModeHeader';
import StatsHeader from './StatsHeader';
import StatsBody from './StatsBody';
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
        <Grid className="clear-panel">
            <ModeHeader mode={mode} handleModeChange={handleModeChange} />
            <StatsHeader activeColumn={activeColumn} columns={columns} loading={loading} />
            <StatsBody
                columns={columns}
                players={players}
                removePlayer={removePlayer}
                mode={mode}
                loading={loading}
            />

            {!players.length && (
                <Grid.Row style={{ height: '70px' }}>
                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <h4>Add a player to get started!</h4>
                    </Grid.Column>
                </Grid.Row>
            )}
        </Grid>
    );
};

export default Index;
