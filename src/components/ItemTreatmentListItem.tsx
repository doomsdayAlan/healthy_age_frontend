import React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Container from './Container';
import { ContainerStyle } from '../styles/ContainerStyle';
import GenericText from './Text';
import { IMAGES } from '../constants/constants';
import ImageContainer from './ImageContainer';
import PressableItem from './PressableItem';

type ItemTreatmentListItemProps = {
    containerStyle?: StyleProp<ViewStyle>;
    treatmentName: string;
    totalMeds: number;
    totalTakes: number;
    topTextSyle?: StyleProp<TextStyle>;
    bottomTextSyle?: StyleProp<TextStyle>;
    onPress?: (event: GestureResponderEvent) => void;
};

const ItemTreatmentList: React.FC<ItemTreatmentListItemProps> = ({
    containerStyle,
    totalMeds,
    totalTakes,
    treatmentName,
    topTextSyle,
    bottomTextSyle,
    onPress,
}) => {

    return(
        <Container style = {containerStyle}>
            <Container style = {ContainerStyle.ContainerTextContainerTreatemntListItem}>
                <GenericText style = {topTextSyle}>
                    {treatmentName}
                </GenericText>
                <GenericText style = {bottomTextSyle}>
                    {totalMeds} medicamentos, {totalTakes} tomas pendientes.   
                </GenericText>
            </Container>
            <PressableItem onPress={onPress}>
                <ImageContainer source = {IMAGES.RIGHT_ARROW} style = {ContainerStyle.RightArrowTreatmentList}/>
            </PressableItem>
        </Container>
    );

};

export default ItemTreatmentList;