import React from 'react';
import Container from '../components/Container';
import NewAccountLayout from '../layouts/NewAccountLayout';
import SafeArea from '../components/SafeArea';
import { NewAccountScreenStyles } from '../styles/NewAccountStyle';

export default function NewAccountScreen(){
    return(
        <SafeArea
            style={NewAccountScreenStyles.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor= '#F5F6FA'
                direction='column'
                justifyContent='center'
                children={<NewAccountLayout/>}
            />
        </SafeArea>
    );
}