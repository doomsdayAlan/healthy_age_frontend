import React from 'react';
import Container from '../components/Container';
import SafeArea from '../components/SafeArea';
import { SetUpScreenStyle } from '../styles/SetUpScreenStyle';
import SetUpScreenLayout from '../layouts/SetUpScreenLayout';
import { ContainerStyle } from '../styles/ContainerStyle';


export default function SetUpScreen(){
    return(
        <SafeArea
            style={SetUpScreenStyle.SafeAreaStyle}
        >
            <Container
                style={ContainerStyle.SetUpScreenStyle}
                children={<SetUpScreenLayout/>}
            />
        </SafeArea>
    );
}