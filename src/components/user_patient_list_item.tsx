import * as React from 'react';
import { GestureResponderEvent, ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import Container from './Container';
import GenericText from './Text';
import ImageContainer from './ImageContainer';
import PressableItem from './PressableItem';
import { IMAGES } from '../constants/constants';
import { ContainerStyle } from '../styles/ContainerStyle';


type PatientListProps = {
    source: ImageSourcePropType;
    text: string;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    iconImageStyle?: StyleProp<ImageStyle>;
    onPress?: (event: GestureResponderEvent) => void;
};

const UserPatientListItem: React.FC<PatientListProps> = ({
    source,
    text,
    containerStyle = ContainerStyle.ConatinerPatientListItemMainMenu,
    textStyle,
    iconImageStyle,
    onPress,
}) => {

    return(
        <Container 
            style = {containerStyle}
        >
            <ImageContainer source = {source} style = {iconImageStyle}/>
            <GenericText
                style = {textStyle}
                numberOfLines={1}
                ellipsizeMode='tail'
            >
                {text}
            </GenericText>
            <PressableItem onPress={onPress}>
                <ImageContainer source = {IMAGES.RIGHT_ARROW} style = {ContainerStyle.RightArrowPatientList}/>
            </PressableItem>
        </Container>
    );
};

export default UserPatientListItem;