import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

const Navbar = ({ router }) => {
    const changeRoute = path => {
        router.push(router.pathname == path ? router.asPath : path);
    };
    return (
        <Menu className="Navbar" pointing fixed="top" secondary size="large">
            <Container>
                <Menu.Item active={router.pathname == '/'} onClick={() => changeRoute('/')}>
                    <span as="a">Home</span>
                </Menu.Item>
                <Menu.Item
                    active={router.pathname == '/leaderboard'}
                    onClick={() => changeRoute('/leaderboard')}
                >
                    <span as="a">Leaderboards</span>
                </Menu.Item>
                {/* Integrate Menu Icon when more paths available */}
                {/* <Responsive
                    as={Menu.Item}
                    icon="bars"
                    fitted="horizontally"
                    position="right"
                    size="large"
                    maxWidth={Responsive.onlyMobile.maxWidth}
                /> */}
            </Container>
        </Menu>
    );
};

export default Navbar;
