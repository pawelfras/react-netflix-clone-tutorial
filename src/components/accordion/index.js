import React, { createContext, useContext, useState } from 'react';
import { Body, Container, Header, Inner, Item, Title } from './styles/accordion';

const ToggleContext = createContext();

const Accordion = ({ children }) => {
    return (
        <Container>
            <Inner>{children}</Inner>
        </Container>
    );
};

const AccordionTitle = ({ children }) => {
    return <Title>{children}</Title>;
};

const AccordionItem = ({ children, key }) => {
    const [toggleShow, setToggleShow] = useState(false);

    return (
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
            <Item key={key}>{children}</Item>
        </ToggleContext.Provider>
    );
};

const AccordionHeader = ({ children }) => {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return (
        <Header onClick={() => setToggleShow((state) => !state)}>
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="/images/icons/add.png" alt="Open" />
            )}
        </Header>
    );
};

const AccordionBody = ({ children }) => {
    const { toggleShow } = useContext(ToggleContext);

    return toggleShow ? <Body>{children}</Body> : null;
};

Accordion.Title = AccordionTitle;
Accordion.Item = AccordionItem;
Accordion.Header = AccordionHeader;
Accordion.Body = AccordionBody;

export default Accordion;
