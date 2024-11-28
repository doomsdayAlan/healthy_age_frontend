import React from 'react';
import Container from '../components/Container';
import SafeArea from '../components/SafeArea';
import { SettingsScreenStyles } from '../styles/SettingsScreenStyles';
import SettingsScreenLayout from '../layouts/SettingsScreenLayout';

export default function SettingsScreen(){
    return(
        <SafeArea
            style={SettingsScreenStyles.SafeAreaStyle}
        >
            <Container 
                alignItems='center'
                backgroundColor= '#F5F6FA'
                direction='column'
                justifyContent='center'
                children={<SettingsScreenLayout/>}
            />
        </SafeArea>
    );
}