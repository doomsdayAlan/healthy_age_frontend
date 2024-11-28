import React from 'react';
import Container from '../components/Container';
import SafeArea from '../components/SafeArea';
import { ProfileScreenStyle } from '../styles/ProfileScreenStyle'
import PatientsScreenLayout from '../layouts/PatientsScreenLayout';

export default function PatientsScreen(){
    return(
        <SafeArea
            style={ProfileScreenStyle.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor='#efefef'
                direction='column'
                justifyContent='center'
                children={<PatientsScreenLayout/>}
            />
        </SafeArea>
    );
}