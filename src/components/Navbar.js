import React from 'react';
import { Container, Menu, Icon, Segment, Responsive } from 'semantic-ui-react';
import Link from 'next/link';

const Navbar = ({ router }) => {
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
                    <Menu.Item active={router.pathname == '/'} style={{ color: 'white' }}>
                        <Link href="/">
                            <span as="a">Home</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item
                        active={router.pathname == '/leaderboard'}
                        style={{ color: 'white' }}
                    >
                        <Link
                            href={
                                router.pathname == '/leaderboard' ? router.asPath : '/leaderboard'
                            }
                        >
                            <span as="a">Leaderboards</span>
                        </Link>
                    </Menu.Item>

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
};

export default Navbar;
