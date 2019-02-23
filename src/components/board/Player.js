import React from 'react';
import Link from 'next/link';
import { Grid, Header, Icon, Responsive } from 'semantic-ui-react';

const StatsColumn = ({ index, content = null, matches = null }) => {
    return (
        <Grid.Column
            className={index == 0 ? '' : 'compact'}
            textAlign={index == 0 ? 'left' : 'center'}
            mobile={index == 0 ? '6' : '2'}
        >
            <Header as={index == 0 ? 'h4' : 'h4'} style={{ color: 'white' }}>
                {content == null ? 'XXXX' : content}
                {index == 0 ? (
                    <Header.Subheader
                        size="small"
                        style={{ color: '#92a2bd', whiteSpace: 'nowrap' }}
                    >
                        {matches == null ? '0000' : matches} Matches
                    </Header.Subheader>
                ) : null}
            </Header>
        </Grid.Column>
    );
};

const TrashColumn = ({ index, removePlayer }) => {
    return (
        <Grid.Column
            textAlign="center"
            mobile="1"
            onClick={() => {
                removePlayer(index);
            }}
        >
            <Icon size="small" color="red" name="trash alternate outline" />
        </Grid.Column>
    );
};

const Player = ({ columns, mode, player, boardIndex, removePlayer }) => {
    return (
        <Grid.Row stretched>
            <Responsive
                as={Grid.Column}
                minWidth={Responsive.onlyMobile.maxWidth}
                textAlign="center"
                mobile="1"
            >
                <Header as="h6" style={{ color: '#92a2bd' }}>
                    {boardIndex + 1}
                </Header>
            </Responsive>
            {columns.map((column, columnIndex) => {
                if (!player) {
                    return <StatsColumn key={columnIndex} index={columnIndex} />;
                }
                const columnContent =
                    columnIndex === 0 ? (
                        <Link href={`/profile/${player.username}`}>{player.username}</Link>
                    ) : (
                        player.stats[`${column.accessor}_${mode}`]
                    );
                const matches = player.stats[`matchesplayed_${mode}`];
                return (
                    <StatsColumn
                        key={columnIndex}
                        index={columnIndex}
                        content={columnContent}
                        matches={matches}
                    />
                );
            })}
            <TrashColumn index={boardIndex} removePlayer={removePlayer} />
        </Grid.Row>
    );
};

export default Player;
