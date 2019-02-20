import React from 'react';
import { Grid, Header, Responsive } from 'semantic-ui-react';

const StatsHeader = ({ columns }) => {
    return (
        <Grid.Row>
            <Responsive
                as={Grid.Column}
                minWidth={Responsive.onlyMobile.maxWidth}
                textAlign="center"
                verticalAlign="middle"
                mobile="1"
            >
                <Header size="tiny">
                    <Header.Subheader as="h6" style={{ color: '#92a2bd' }}>
                        #
                    </Header.Subheader>
                </Header>
            </Responsive>
            {columns.map((column, index) => (
                <Grid.Column
                    style={{ backgroundColor: '#2c3c57' }}
                    className={index == 0 ? '' : 'compact'}
                    key={index}
                    onClick={() => column.sort()}
                    textAlign={index == 0 ? 'left' : 'center'}
                    verticalAlign="middle"
                    mobile={index == 0 ? '6' : '2'}
                >
                    <Header size="tiny">
                        <Header.Subheader as="h6" style={{ color: '#92a2bd' }}>
                            {column.header}
                        </Header.Subheader>
                    </Header>
                </Grid.Column>
            ))}
        </Grid.Row>
    );
};

export default StatsHeader;
