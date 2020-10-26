import React from 'react';
import { Footer } from '../components';

const FooterContainer = () => {
    return (
        <Footer>
            <Footer.Title>Questions? Contact us.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">FAQ</Footer.Link>
                    <Footer.Link href="#">Inverstor Relations</Footer.Link>
                    <Footer.Link href="#">Ways to Watch</Footer.Link>
                    <Footer.Link href="#">Coporate Information</Footer.Link>
                    <Footer.Link href="#">Netflix Originals</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Help</Footer.Link>
                    <Footer.Link href="#">Jobs</Footer.Link>
                    <Footer.Link href="#">Term of Use</Footer.Link>
                    <Footer.Link href="#">Contact Us</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Account</Footer.Link>
                    <Footer.Link href="#">Redeem</Footer.Link>
                    <Footer.Link href="#">Private</Footer.Link>
                    <Footer.Link href="#">Speed Test</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Media Centre</Footer.Link>
                    <Footer.Link href="#">Buy Gift Cards</Footer.Link>
                    <Footer.Link href="#">Cookie Preferences</Footer.Link>
                    <Footer.Link href="#">Legal Notices</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix Poland</Footer.Text>
        </Footer>
    );
};

export default FooterContainer;
