import React from 'react';
import Container from '../components/Container';
import SafeArea from '../components/SafeArea';
import { NotificationsScreenStyles } from '../styles/NotificationsScreenStyles';
import NotificationsScreenLayout from '../layouts/NotificationsScreenLayout';

export default function NotificationsScreen(){
    return(
        <SafeArea
            style={NotificationsScreenStyles.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor= '#F5F6FA'
                direction='column'
                justifyContent='center'
                children={<NotificationsScreenLayout/>}
            />
        </SafeArea>
    );
}