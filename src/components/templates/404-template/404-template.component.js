import React, { Component } from 'react';
import NavbarComponent from '@/components/molecules/navbar/navbar.component';

export default class GenericTemplateComponent extends Component {
    render() {
        return (
            <div className="app">
                <NavbarComponent />
            </div>
        );
    }
}
