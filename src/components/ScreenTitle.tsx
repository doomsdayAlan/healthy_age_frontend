import * as React from 'react';
import PressableItem from './PressableItem';
import Container from './Container';
import GenericText from './Text';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ContainerStyle } from '../styles/ContainerStyle';
import { TextStyles } from '../styles/TextStyles';
import ImageContainer from './ImageContainer';
import { IMAGES } from '../constants/constants';
import { ImageStyles } from '../styles/ImageContainerStyle';

type ScreenTitleProps = {
    text: string;
    textSyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>; 
    onPress?: (event: GestureResponderEvent) => void;
    addButton?: boolean;
}

const ScreenTitle: React.FC<ScreenTitleProps> = ({
    text,
    textSyle = TextStyles.ScreenTitleTextStyle,
    containerStyle = ContainerStyle.ScreenTitleContainer,
    onPress,
    addButton = true,
}) => {
        if (addButton) {
            return(
                <Container
                    style = {containerStyle}
                >
                    <GenericText
                        style = {textSyle}
                    >
                        {text}
                    </GenericText>
                    
                    <PressableItem
                        onPress = {onPress}
                    >
                        <ImageContainer source = {IMAGES.ADD} style = {ImageStyles.AddIcon}/>
                    </PressableItem>
                </Container>
            );
        }else {
            return(
                <Container
                    style = {containerStyle}
                >
                    <GenericText
                        style = {textSyle}
                    >
                        {text}
                    </GenericText>
                </Container>
            );
        }
}

export default ScreenTitle;