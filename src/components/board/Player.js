import React from 'react';
import { Grid, Header, Icon, Responsive } from 'semantic-ui-react';

const Player = ({ columns, mode, player, boardIndex, removePlayer }) => {
    return (
        <Grid.Row columns={columns.length} stretched>
            <Responsive
                as={Grid.Column}
                textAlign="center"
                mobile="1"
                minWidth={Responsive.onlyMobile.maxWidth}
                fireOnMount
            >
                <Header as="h6" style={{ color: '#92a2bd' }}>
                    {boardIndex + 1}
                </Header>
            </Responsive>
            {columns.map((column, columnIndex) => {
                const columnContent =
                    columnIndex === 0
                        ? player.username
                        : player.stats[`${column.accessor}_${mode}`];
                return (
                    <Grid.Column
                        className={columnIndex == 0 ? '' : 'compact'}
                        key={columnIndex}
                        textAlign={columnIndex == 0 ? 'left' : 'center'}
                        mobile={columnIndex == 0 ? '6' : '2'}
                    >
                        <Header as={columnIndex == 0 ? 'h4' : 'h4'} style={{ color: 'white' }}>
                            {columnContent}
                            {columnIndex == 0 ? (
                                <Header.Subheader
                                    size="small"
                                    style={{ color: '#92a2bd', whiteSpace: 'nowrap' }}
                                >
                                    {player.stats[`matchesplayed_${mode}`]} Matches
                                </Header.Subheader>
                            ) : null}
                        </Header>
                    </Grid.Column>
                );
            })}
            <Grid.Column
                textAlign="center"
                mobile="1"
                onClick={() => {
                    removePlayer(boardIndex);
                }}
            >
                <Icon size="small" color="red" name="trash alternate outline" />
            </Grid.Column>
        </Grid.Row>
    );
};

export default Player;
