import React from "react";
import { StyleProp, ViewStyle, ImageStyle, GestureResponderEvent, TextStyle, ImageSourcePropType } from "react-native";
import Container from "./Container";
import ImageContainer from "./ImageContainer";
import { IMAGES } from "../constants/constants";
import GenericText from "./Text";
import { ImageStyles } from "../styles/ImageContainerStyle";
import { TextStyles } from "../styles/TextStyles";
import PressableItem from "./PressableItem";

type IconTextButtonProps = {
    containerStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
    source: ImageSourcePropType;
    textStyle?: StyleProp<TextStyle>;
    text: string;
    onPress?: (event: GestureResponderEvent) => void;
};

const IconTextButton: React.FC<IconTextButtonProps> = ({
    containerStyle,
    imageStyle = ImageStyles.IconButtonTextStyle,
    source,
    textStyle = TextStyles.ProfileScreenButtonTextStyle,
    text,
    onPress,
}) => {
    return(
        <PressableItem
            onPress={onPress}
        >
            <Container
                style = {[containerStyle, {flexDirection: 'row', alignItems:'center'}]}
            >
                <ImageContainer source = {source? source : IMAGES.TEST_IMAGE} style = {imageStyle}/>
                <GenericText
                    style = {textStyle}
                >
                    {text}
                </GenericText>
            </Container>
        </PressableItem>
    );
};

export default IconTextButton;