import React from 'react';
import { Grid, Header, Responsive, Dimmer } from 'semantic-ui-react';

const StatsHeader = ({ activeColumn, columns, loading }) => {
    return (
        <Dimmer.Dimmable
            as={Grid.Row}
            dimmed={loading}
            style={{ backgroundColor: '#2c3c57', color: 'white' }}
        >
            <Dimmer active={loading} />

            <Responsive
                as={Grid.Column}
                minWidth={Responsive.onlyMobile.maxWidth}
                textAlign="center"
                verticalAlign="middle"
                mobile="1"
                style={{ cursor: 'pointer' }}
            >
                <Header size="tiny">
                    <Header.Subheader as="h6" style={{ color: '#92a2bd' }}>
                        #
                    </Header.Subheader>
                </Header>
            </Responsive>
            {columns.map((column, index) => (
                <Grid.Column
                    style={{
                        cursor: 'pointer'
                    }}
                    className={index == 0 ? '' : 'compact'}
                    key={index}
                    onClick={() => column.sort()}
                    textAlign={index == 0 ? 'left' : 'center'}
                    verticalAlign="middle"
                    mobile={index == 0 ? '6' : '2'}
                >
                    <Header size="tiny">
                        <Header.Subheader
                            as="h6"
                            style={{
                                color: column.accessor == activeColumn ? 'yellow' : '#92a2bd'
                            }}
                        >
                            {column.header}
                        </Header.Subheader>
                    </Header>
                </Grid.Column>
            ))}
        </Dimmer.Dimmable>
    );
};

export default StatsHeader;
