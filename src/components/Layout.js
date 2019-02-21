import React, { PureComponent } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class Layout extends PureComponent {
    render() {
        const { children } = this.props;
        return (
            <React.Fragment>
                <Navbar />
                {children}
                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}
