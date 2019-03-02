import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';

const ModeHeader = ({ mode, handleModeChange }) => {
    let title = mode.charAt(0).toUpperCase() + mode.slice(1);

    return (
        <Grid.Row
            columns="3"
            className={mode}
            style={{ borderTopLeftRadius: '0.28571429rem', borderTopRightRadius: '0.28571429rem' }}
        >
            <Grid.Column
                as="span"
                floated="left"
                textAlign="left"
                verticalAlign="middle"
                onClick={() => handleModeChange('reverse')}
            >
                <Icon name="angle left" />
            </Grid.Column>
            <Grid.Column as="span" textAlign="center" verticalAlign="middle">
                <h4>{title}</h4>
            </Grid.Column>
            <Grid.Column
                as="span"
                floated="right"
                textAlign="right"
                verticalAlign="middle"
                onClick={() => handleModeChange('forward')}
            >
                <Icon name="angle right" />
            </Grid.Column>
        </Grid.Row>
    );
};

export default ModeHeader;
