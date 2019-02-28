import React from 'react';
import { Container, Menu, Segment, Responsive } from 'semantic-ui-react';

const Navbar = ({ router }) => {
    return (
        <Segment
            style={{ backgroundColor: '#1B2137', color: 'white', padding: '0px' }}
            textAlign="center"
            vertical
        >
            <Menu
                pointing
                fixed="top"
                secondary
                size="large"
                style={{ backgroundColor: '#1B2137', color: 'white' }}
            >
                <Container style={{ backgroundColor: '#1B2137', color: 'white' }}>
                    <Menu.Item
                        active={router.pathname == '/'}
                        style={{
                            color: router.pathname == '/' ? '#1B2137' : 'white',
                            backgroundColor: router.pathname == '/' ? 'yellow' : null
                        }}
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        <span as="a">Home</span>
                    </Menu.Item>
                    <Menu.Item
                        active={router.pathname == '/leaderboard'}
                        style={{
                            color: router.pathname == '/leaderboard' ? '#1B2137' : 'white',
                            backgroundColor: router.pathname == '/leaderboard' ? 'yellow' : null
                        }}
                        onClick={() => {
                            router.push(
                                router.pathname == '/leaderboard' ? router.asPath : '/leaderboard'
                            );
                        }}
                    >
                        <span as="a">Leaderboards</span>
                    </Menu.Item>

                    {/* BARS */}
                    <Responsive
                        as={Menu.Item}
                        icon="bars"
                        fitted="horizontally"
                        position="right"
                        size="large"
                        style={{ color: 'grey' }}
                        maxWidth={Responsive.onlyMobile.maxWidth}
                    />
                </Container>
            </Menu>
        </Segment>
    );
};

export default Navbar;
