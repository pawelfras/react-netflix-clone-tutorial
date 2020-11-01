import 'normalize.css';
import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { GlobalStyles } from './global-styles';
import registerServiceWorker from './registerServiceWorker';
import firebase from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase.context';

render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>,
    document.getElementById('root')
);
registerServiceWorker();
