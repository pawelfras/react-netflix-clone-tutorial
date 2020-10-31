import React from 'react';
import { Link } from 'react-router-dom';
import { Background, ButtonLink, Container, Logo } from './styles/header';

export default function Header({ background = true, children, ...restProps }) {
    return background ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = ({ children }) => {
    return <Container>{children}</Container>;
};

Header.Logo = ({ to, ...restProps }) => {
    return (
        <Link to={to}>
            <Logo {...restProps} />
        </Link>
    );
};

Header.Button = ({ children, ...restProps }) => {
    return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
