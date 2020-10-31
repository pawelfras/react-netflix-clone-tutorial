import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Browse, Home, SignIn, SignUp } from './pages';

const App = () => {
    return (
        <BrowserRouter>
            <Route exact path={ROUTES.HOME}>
                <Home />
            </Route>
            <Route exact path={ROUTES.BROWSE}>
                <Browse />
            </Route>
            <Route exact path={ROUTES.SIGN_UP}>
                <SignUp />
            </Route>
            <Route exact path={ROUTES.SIGN_IN}>
                <SignIn />
            </Route>
        </BrowserRouter>
    );
};

export default App;
