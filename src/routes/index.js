import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import FrontPage from './pages/front-page/front-page.page';

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route path="/" component={FrontPage} />
            </BrowserRouter>
        );
    }
}

export default Router;
