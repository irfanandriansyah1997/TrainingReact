import React, { Component } from 'react';

import './style/style.scss';
import Container from '@/components/atoms/container/container.component';

export default class NavbarComponent extends Component {
    render() {
        return (
            <div className="block navbar">
                <Container>
                    <div className="navbar__logo">
                        <img
                            src="https://public.urbanindo.com/images/urbanindo-2019.svg"
                            alt="logo"
                        />
                    </div>
                    <div className="navbar__content">Navbar</div>
                </Container>
            </div>
        );
    }
}
