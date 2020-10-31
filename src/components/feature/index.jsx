import React from 'react';
import { Container, Subtitle, Title } from './styles/feature';

export default function Feature({ children }) {
    return <Container>{children}</Container>;
}

Feature.Title = ({ children }) => {
    return <Title>{children}</Title>;
};

Feature.Subtitle = ({ children }) => {
    return <Subtitle>{children}</Subtitle>;
};
