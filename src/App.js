import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import FaqsContainer from './containers/faq';
import FooterContainer from './containers/footer-container';
import JumbotronContainer from './containers/jumbotron-container';
import * as ROUTES from './constants/routes';

const App = () => {
    return (
        <BrowserRouter>
            <Route exec path={ROUTES.HOME}>
                <JumbotronContainer />
                <FaqsContainer />
                <FooterContainer />
            </Route>
        </BrowserRouter>
    );
};

export default App;
