import React from 'react';
import { Button, Container, Input, Text } from './styles/opt-form';

const OptForm = ({ children }) => {
    return <Container>{children}</Container>;
};

const OptFormInput = ({ ...restProps }) => {
    return <Input {...restProps} />;
};

const OptFormButton = ({ children }) => {
    return (
        <Button>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    );
};

const OptFormText = ({ children }) => {
    return <Text>{children}</Text>;
};

OptForm.Input = OptFormInput;
OptForm.Button = OptFormButton;
OptForm.Text = OptFormText;

export default OptForm;
