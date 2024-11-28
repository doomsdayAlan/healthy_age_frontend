import React from 'react';
import Container from '../components/Container';
import MailConfirmationLayout from '../layouts/MailConfirmationLayout';
import SafeArea from '../components/SafeArea';
import { MailConfirmationStyles } from '../styles/MailConfirmationStyle';

export default function MailConfirmationScreen(){
    return(
        <SafeArea
            style={MailConfirmationStyles.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor='#F5F6FA'
                direction='column'
                justifyContent='center'
                children={<MailConfirmationLayout/>}
            />
        </SafeArea>
    );
}