import React from 'react';
import { Header, Grid, Image, Card } from 'semantic-ui-react';

const ProfileHeader = ({ username, season, matches }) => {
    return (
        <Grid style={{ marginBottom: '16px' }}>
            <Card raised fluid style={{ backgroundColor: '#6c80a2' }}>
                <Card.Content>
                    <Image
                        bordered
                        floated="right"
                        size="tiny"
                        src="https://pm1.narvii.com/6918/222ae5aa45c92f4ce6b86e39d3be5c0385473d9er1-928-760v2_hq.jpg"
                    />
                    <Card.Header>
                        <Header as="h1" style={{ color: 'white' }}>
                            {username}
                            <Header.Subheader>Season {season}</Header.Subheader>
                        </Header>
                    </Card.Header>
                    <Card.Meta>{matches} Matches</Card.Meta>
                </Card.Content>
            </Card>
        </Grid>
    );
};

export default ProfileHeader;
