import React from 'react';
import Container from '../components/Container';
import MainPageScreenLayout from '../layouts/MainPageScreenLayout';
import SafeArea from '../components/SafeArea';
import { MainPageScreenStyles } from '../styles/MainPageScreenStyle';

export default function MainPageScreen(){
    return(
        <SafeArea
            style={MainPageScreenStyles.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor='#F5F6FA'
                direction='column'
                justifyContent='center'
                children={<MainPageScreenLayout/>}
            />
        </SafeArea>
    );
}