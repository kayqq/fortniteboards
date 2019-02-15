import React, { PureComponent } from 'react';
import { Button, Container, Divider, Grid, Segment, Visibility } from 'semantic-ui-react';
import Navbar from './Navbar';
import Footer from './Footer';

export default class Layout extends PureComponent {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                {this.props.children}
                {/* <Footer /> */}
            </React.Fragment>
        );
    }
}
