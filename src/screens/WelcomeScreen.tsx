import React from 'react';
import Container from '../components/Container';
import WelcomeScreenLayout from '../layouts/WelcomeScreenLayout';
import SafeArea from '../components/SafeArea';
import { WelcomeScreenStyle } from '../styles/WelcomeScreenStyle';
import { AccountConnectionContext } from '../context/AccountConnectionContext';
import { useContext } from 'react';


export default function WelcomeScreen(){

    const {AccountConnection} = useContext(AccountConnectionContext);

    return(
        <SafeArea
            style={WelcomeScreenStyle.SafeAreaStyle}
        >
            <Container 
                children={<WelcomeScreenLayout AccountConnected={AccountConnection}/>}
            />
        </SafeArea>
    );
}