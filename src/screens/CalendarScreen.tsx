import React from 'react';
import Container from '../components/Container';
import SafeArea from '../components/SafeArea';
import { ProfileScreenStyle } from '../styles/ProfileScreenStyle'
import CalendarScreenLayout from '../layouts/CalendarScreenLayout';

export default function CalendarScreen(){
    return(
        <SafeArea
            style={ProfileScreenStyle.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor='#efefef'
                direction='column'
                justifyContent='center'
                children={<CalendarScreenLayout/>}
            />
        </SafeArea>
    );
}