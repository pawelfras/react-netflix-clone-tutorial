import React from 'react';
import { Feature, OptForm } from '../components';
import { FaqsContainer, FooterContainer, HeaderContainer, JumbotronContainer } from '../containers';

const Home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.Subtitle>Watch anywhere, Calcel at any time.</Feature.Subtitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Text>
                            Ready to watch? Enter your email to create or restart your membership.
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    );
};

export default Home;
