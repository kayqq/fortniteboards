import React, { useState } from 'react';
import copy from 'copy-to-clipboard';
import { Grid, Popup, Button, Input, Header } from 'semantic-ui-react';

const CopyLinkPopup = ({ children }) => {
    const [isCopied, setCopied] = useState(false);
    const [link, setLink] = useState('');

    const handleCopyClipboard = link => {
        const didCopy = copy(link);
        setCopied(didCopy);
    };

    return (
        <Popup
            style={{ width: '100%' }}
            hideOnScroll
            hoverable
            on="click"
            position="top center"
            onOpen={() => setLink(location.href)}
            onClose={() => setCopied(false)}
            content={
                <Grid textAlign="center">
                    <Grid.Row textAlign="left">
                        <Grid.Column textAlign="left">
                            <Header as="h5" color={isCopied ? 'green' : 'grey'}>
                                {isCopied ? 'Link copied!' : 'Link to custom leaderboard: '}
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{ paddingTop: '0px' }}>
                        <Grid.Column>
                            <Input value={link} />
                            <Button
                                icon={isCopied ? 'check' : 'linkify'}
                                color={isCopied ? 'green' : 'grey'}
                                compact
                                onClick={() => handleCopyClipboard(link)}
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            }
            trigger={children}
        />
    );
};

export default CopyLinkPopup;
