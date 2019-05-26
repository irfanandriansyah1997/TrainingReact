/**
 * 404 Template
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.03
 */

import React, { Component } from 'react';
import NavbarComponent from '@/components/organisms/navbar/navbar.component';

export default class GenericTemplateComponent extends Component {
    render() {
        return (
            <div className="app">
                <NavbarComponent />
            </div>
        );
    }
}
