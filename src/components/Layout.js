import React, { PureComponent } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class Layout extends PureComponent {
    render() {
        const { children, router } = this.props;
        return (
            <React.Fragment>
                <Navbar router={router} />
                {children}
                <Footer />
            </React.Fragment>
        );
    }
}
