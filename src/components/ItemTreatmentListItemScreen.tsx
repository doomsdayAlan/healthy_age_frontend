import React from 'react';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Container from './Container';
import { ContainerStyle } from '../styles/ContainerStyle';
import GenericText from './Text';
import { IMAGES } from '../constants/constants';
import ImageContainer from './ImageContainer';
import PressableItem from './PressableItem';
import { TextStyles } from '../styles/TextStyles';

type ItemTreatmentListItemProps = {
    containerStyle?: StyleProp<ViewStyle>;
    treatmentName: string;
    name: string;
    dateStart: Date;
    dateEnd: Date;
    totalMeds: number;
    totalTakes: number;
    topTextStyle?: StyleProp<TextStyle>;
    bottomTextStyle?: StyleProp<TextStyle>;
    onPressEdit?: (event: GestureResponderEvent) => void;
    onPressDelete?: (event: GestureResponderEvent) => void;
};

const ItemTreatmentListScreen: React.FC<ItemTreatmentListItemProps> = ({
    containerStyle,
    name,
    dateStart,
    dateEnd,
    treatmentName,
    topTextStyle,
    bottomTextStyle,
    onPressEdit,
    onPressDelete,
}) => {

    const formattedDateStart = dateStart.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const formattedDateEnd = dateEnd.toLocaleDateString('es-ES', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    const handleDetails = () => {

    };

    return(
        <Container style = {containerStyle}>
            <Container style = {ContainerStyle.ContainerTextContainerTreatemntListItem}>
                <GenericText style = {topTextStyle}>
                    {treatmentName}
                </GenericText>
                <GenericText style = {[bottomTextStyle, {marginBottom: 10}]}>
                    {name}
                </GenericText>
                <Container
                    style = {ContainerStyle.DatesTreatmentScreenContainerStyle}
                >
                    <Container
                        style = {ContainerStyle.ConatinerTreatmentListDates}
                    >
                        <GenericText
                            style = {TextStyles.DateTextStyleTreatmentScreen}
                        >
                            {formattedDateStart}
                        </GenericText>
                    </Container>

                    <GenericText
                        style = {[bottomTextStyle, {marginLeft: 0}]}
                    >
                        a
                    </GenericText>

                    <Container
                        style = {ContainerStyle.ConatinerTreatmentListDates}
                    >
                        <GenericText
                            style = {TextStyles.DateTextStyleTreatmentScreen}
                        >
                            {formattedDateStart}
                        </GenericText>
                    </Container>

                </Container>

                <Container
                    style = {ContainerStyle.BottomContainerTreatmentScreenItem}
                >

                <PressableItem
                    onPress = {handleDetails}
                    style = {ContainerStyle.TreatmentButtonStyle}
                >
                    <GenericText style = {TextStyles.TreatmentListItemTextStyleBottomButton}>
                        Detalles   
                    </GenericText>
                </PressableItem>

                <PressableItem onPress={onPressEdit}>
                    <ImageContainer source = {IMAGES.EDIT} style = {ContainerStyle.EditStyle}/>
                </PressableItem>
                <PressableItem onPress={onPressDelete}>
                    <ImageContainer source = {IMAGES.DELETE} style = {ContainerStyle.DeleteStyle}/>
                </PressableItem>

            </Container>

            </Container>
            
        </Container>
    );

};

export default ItemTreatmentListScreen;