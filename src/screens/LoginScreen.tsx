import React from 'react';
import Container from '../components/Container';
import LoginLayout from '../layouts/LoginLayout';
import SafeArea from '../components/SafeArea';
import { LoginScreenStyles } from '../styles/LoginStyle';

export default function LoginScreen(){
    return(
        <SafeArea
            style={LoginScreenStyles.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor='#F5F6FA'
                direction='column'
                justifyContent='center'
                children={<LoginLayout/>}
            />
        </SafeArea>
    );
}