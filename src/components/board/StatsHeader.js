import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

const StatsHeader = ({ columns }) => {
    return (
        <Grid.Row columns={columns.length} stretched>
            {columns.map((column, key) => (
                <Grid.Column key={key} textAlign="center" verticalAlign="middle">
                    <Header size="tiny">
                        <Header.Subheader style={{ color: '#92a2bd' }}>
                            {column.header}
                        </Header.Subheader>
                    </Header>
                </Grid.Column>
            ))}
        </Grid.Row>
    );
};

export default StatsHeader;
