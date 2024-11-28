import React from 'react';
import Container from '../components/Container';
import SafeArea from '../components/SafeArea';
import { SettingsScreenStyles } from '../styles/SettingsScreenStyles';
import TreatmentListLayout from '../layouts/TreatmentListLayout';

export default function TreatmentListScreen(){
    return(
        <SafeArea
            style={SettingsScreenStyles.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor= '#F5F6FA'
                direction='column'
                justifyContent='center'
                children={<TreatmentListLayout/>}
            />
        </SafeArea>
    );
}