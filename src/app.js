/**
 * Main Project
 * @author Irfan Andriansyah <irfanandriansyah10@gmail.com>
 * @since 2019.05.03
 */

/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Router from '@/routes';
import Theme from '@/components/themes/default';

import './styles/scss/app.scss';

ReactDOM.hydrate(
    <ThemeProvider theme={Theme}>
        <Router />
    </ThemeProvider>,
    document.getElementById('app')
);
