import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal, ThemeProvider } from 'styled-components';
import Router from '@/routes';
import Theme from '@/components/themes/default';

import './styles/scss/app.scss';

injectGlobal([
    `
body {
    margin: 0;
}
`
]);

ReactDOM.render(
    <ThemeProvider theme={Theme}>
        <Router />
    </ThemeProvider>,
    document.getElementById('app')
);
