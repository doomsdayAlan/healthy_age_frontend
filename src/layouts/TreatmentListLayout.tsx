import * as React from 'react';
import Container from '../components/Container';
import { ContainerStyle } from '../styles/ContainerStyle';
import ScreenTitle from '../components/ScreenTitle';
import TabMenu from '../components/TabMenu';
import ItemTreatmentList from '../components/ItemTreatmentListItem';
import { TextStyles } from '../styles/TextStyles';
import ItemTreatmentListScreen from '../components/ItemTreatmentListItemScreen';
import Separator from '../components/Separator';



export default function TreatmentListLayout(){

    const handleAddItem = () => {

    };

    const today = new Date();
    return (
        <Container
            style = {ContainerStyle.DefaultScreenContainer}
        >
            <ScreenTitle text='Lista de tratamientos' onPress = {handleAddItem}/>

            <Container
                contentContainerStyle = {ContainerStyle.ContentContainerScrolleableView}
                showsVerticalScrollIndicator = {false}
                scrollEnabled = {true}
            >
                <ItemTreatmentListScreen
                    treatmentName={'Peste negra'}
                    totalMeds={3}
                    totalTakes={2}
                    dateStart = {today}
                    dateEnd = {today}
                    name = {"Dr.Juan Papas Fritas"}
                    containerStyle = {ContainerStyle.ConatinerTreatmentListItemScreen}
                    topTextStyle = {TextStyles.TreatmentListItemTextStyleTop}
                    bottomTextStyle = {TextStyles.TreatmentListItemTextStyleBottom}
                />
                
            </Container>

            <Separator containerStyle={ContainerStyle.TransparentSeparator}/>

            <TabMenu/>
            
        </Container>
    );
}