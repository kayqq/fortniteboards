import App, { Container } from 'next/app';
import React from 'react';
import { withRouter } from 'next/router';

import Navbar from '../src/components/Navbar';

import '../src/styles/app.scss';

class MyApp extends App {
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps, router } = this.props;
        return (
            <Container>
                <Navbar router={router} />
                <Component router={router} {...pageProps} />
            </Container>
        );
    }
}

export default withRouter(MyApp);
