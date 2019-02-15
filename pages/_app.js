import App, { Container } from 'next/app';
import React from 'react';
import { withRouter } from 'next/router';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import createStore from '../src/store/createStore';

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
        const { Component, pageProps, store, router } = this.props;
        return (
            <Container>
                <Provider store={store}>
                    <Layout>
                        <Component router={router} {...pageProps} />
                    </Layout>
                </Provider>
            </Container>
        );
    }
}

export default withRedux(createStore)(withRouter(MyApp));
