import React, { Component } from 'react';
import { Button, Container, Menu, Segment, Visibility } from 'semantic-ui-react';
import { Link } from '../../routes';

class Header extends Component {
    render() {
        return (
            <Visibility>
                <Segment inverted textAlign="center" vertical>
                    <Container>
                        <Menu inverted pointing secondary size="large">
                            <Menu.Item as="a" active>
                                <Link route="/">
                                    <span>Home</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item as="a">
                                <Link route="/about">
                                    <span>About</span>
                                </Link>
                            </Menu.Item>

                            <Menu.Menu position="right">
                                <Menu.Item className="item">
                                    <Button as="a" inverted>
                                        Log in
                                    </Button>
                                </Menu.Item>
                                <Menu.Item>
                                    <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu>
                    </Container>
                </Segment>
            </Visibility>
        );
    }
}

export default Header;
