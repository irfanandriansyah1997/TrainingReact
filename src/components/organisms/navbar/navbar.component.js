import React, { Component } from 'react';

import './style/style.scss';

export default class NavbarComponent extends Component {
    render() {
        return (
            <div className="block navbar">
                <div className="container flex">
                    <div className="navbar__logo">
                        <img
                            src="https://public.urbanindo.com/images/urbanindo-2019.svg"
                            alt="logo"
                        />
                    </div>
                    <div className="navbar__content">Navbar</div>
                </div>
            </div>
        );
    }
}
