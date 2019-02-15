import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const Player = ({ columns, mode, player, key }) => {
    return (
        <Grid.Row key={key} columns={columns.length} stretched>
            {columns.map((column, columnIndex) => {
                const columnContent =
                    columnIndex === 0 // if first column
                        ? player.username // get username
                        : player.stats[`${column.accessor}_${mode}`]; // else get stats
                return (
                    <Grid.Column key={columnIndex} textAlign="center" verticalAlign="middle">
                        <Header size="medium" style={{ color: 'white' }}>
                            {columnContent}
                        </Header>
                    </Grid.Column>
                );
            })}
        </Grid.Row>
    );
};

export default Player;
