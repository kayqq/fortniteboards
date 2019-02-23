import React, { Component } from 'react';
import { Container, Menu, Icon, Segment, Responsive } from 'semantic-ui-react';
import { Link } from '../../routes';
import SearchBar from './SearchBar';

export default class Navbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchVisible: false
        };
    }

    render() {
        return (
            <Segment
                style={{ backgroundColor: '#4a4a4a', color: 'white', padding: '0px' }}
                textAlign="center"
                vertical
            >
                <Menu
                    pointing
                    fixed="top"
                    secondary
                    size="large"
                    style={{ backgroundColor: '#4a4a4a', color: 'white' }}
                >
                    <Container style={{ backgroundColor: '#4a4a4a', color: 'white' }}>
                        {this.state.searchVisible ? (
                            <SearchBar />
                        ) : (
                            <React.Fragment>
                                <Menu.Item as="a" active style={{ color: 'white' }}>
                                    <Link as="/" href="/">
                                        <span as="a">Home</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item style={{ color: 'white' }}>
                                    <Link as="/leaderboard" href="/leaderboard">
                                        <span as="a">Leaderboards</span>
                                    </Link>
                                </Menu.Item>
                            </React.Fragment>
                        )}

                        {/* BARS */}
                        <Responsive
                            as={Menu.Item}
                            icon
                            position="right"
                            style={{ color: 'grey' }}
                            onClick={() => console.log('clicked!')}
                            maxWidth={Responsive.onlyMobile.maxWidth}
                        >
                            <Icon name="bars" size="large" />
                        </Responsive>
                    </Container>
                </Menu>
            </Segment>
        );
    }
}
