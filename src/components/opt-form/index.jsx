import React from 'react';
import { Button, Container, Input, Text } from './styles/opt-form';

export default function OptForm({ children }) {
    return <Container>{children}</Container>;
}

OptForm.Input = ({ ...restProps }) => {
    return <Input {...restProps} />;
};

OptForm.Button = ({ children }) => {
    return (
        <Button>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
};

OptForm.Text = ({ children }) => {
    return <Text>{children}</Text>;
};
