import React from 'react';
import FaqsContainer from './containers/faq';
import FooterContainer from './containers/footer-container';
import JumbotronContainer from './containers/jumbotron-container';

const App = () => {
    return (
        <>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};

export default App;
