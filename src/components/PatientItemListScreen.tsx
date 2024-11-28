import React from 'react';
import { GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Container from './Container';
import { ContainerStyle } from '../styles/ContainerStyle';
import GenericText from './Text';
import { IMAGES } from '../constants/constants';
import ImageContainer from './ImageContainer';
import PressableItem from './PressableItem';
import { TextStyles } from '../styles/TextStyles';

type ItemPatientListItemProps = {
    containerStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    name: string;
    phone: string;
    age: string;
    source: ImageSourcePropType;
    topTextStyle?: StyleProp<TextStyle>;
    bottomTextStyle?: StyleProp<TextStyle>;
    onPressEdit?: (event: GestureResponderEvent) => void;
    onPressDelete?: (event: GestureResponderEvent) => void;
};

const ItemPatientListScreen: React.FC<ItemPatientListItemProps> = ({
    containerStyle,
    imageStyle,
    name,
    source,
    phone,
    age,
    topTextStyle,
    bottomTextStyle,
    onPressEdit,
    onPressDelete,
}) => {

    const handleDetails = () => {

    };

    return(
        <Container style = {containerStyle}>
            <Container
                style = {ContainerStyle.PatientListItemContainer}
            >
                <ImageContainer source={source} style = {imageStyle}/>
                <Container
                    style = {ContainerStyle.TextPatientListItemContainerStyle}
                >
                    <GenericText
                        style = {[topTextStyle, TextStyles.PatientNameTextStylePatientScreen]}
                    >
                        {name}
                    </GenericText>

                    <GenericText
                        style = {[bottomTextStyle, TextStyles.PatientDataTextStylePatientScreen]}
                    >
                        {age} Años
                    </GenericText>

                    <GenericText
                        style = {[bottomTextStyle, TextStyles.PatientDataTextStylePatientScreen]}
                    >
                        Teléfono: {phone}
                    </GenericText>

                    <Container
                        style = {ContainerStyle.PatientListItemButtonsContainer}
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
        </Container>
    );

};

export default ItemPatientListScreen;