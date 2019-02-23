import App, { Container } from 'next/app';
import React from 'react';
import { withRouter } from 'next/router';

import Layout from '../src/components/Layout';

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
                <Layout>
                    <Component router={router} {...pageProps} />
                </Layout>
            </Container>
        );
    }
}

export default withRouter(MyApp);
