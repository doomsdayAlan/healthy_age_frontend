import * as React from 'react';
import Container from '../components/Container';
import GenericText from '../components/Text';
import { ContainerStyle } from '../styles/ContainerStyle';
import ScreenTitle from '../components/ScreenTitle';
import TabMenu from '../components/TabMenu';
import ItemPatientListScreen from '../components/PatientItemListScreen';
import { IMAGES } from '../constants/constants';
import { ImageStyles } from '../styles/ImageContainerStyle';
import Separator from '../components/Separator';



export default function PatientsScreenLayout(){

    const handleAddItem = () => {
        
    };

    return (
        <Container
            style = {ContainerStyle.DefaultScreenContainer}
        >
            <ScreenTitle text='Mis Adultos Mayores ' onPress = {handleAddItem}/>

            <Container
               contentContainerStyle = {ContainerStyle.ContentContainerScrolleableView}
               showsVerticalScrollIndicator = {false}
               scrollEnabled = {true}
            >

                <ItemPatientListScreen
                    name = {'AAAAA YA ME CANSE'}
                    phone = {'5566778855'}
                    age = {'9'} 
                    source = {IMAGES.VIEJITA}
                    imageStyle = {ImageStyles.IconPatientListScreen}
                />
                
            </Container>

            <Separator containerStyle={ContainerStyle.TransparentSeparator}/>

            <TabMenu/>
        </Container>
    );
}