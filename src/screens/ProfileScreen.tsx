import React from 'react';
import Container from '../components/Container';
import ProfileLayout from '../layouts/ProfileScreenLayout';
import SafeArea from '../components/SafeArea';
import { ProfileScreenStyle } from '../styles/ProfileScreenStyle'

export default function ProfileScreen(){
    return(
        <SafeArea
            style={ProfileScreenStyle.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor='#efefef'
                direction='column'
                justifyContent='center'
                children={<ProfileLayout/>}
            />
        </SafeArea>
    );
}