import React from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
import Container from "./Container";
import GenericText from "./Text";

type SeparatorProps = {
    text?: string;
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
};

const Separator : React.FC<SeparatorProps> = ({
    text,
    textStyle,
    containerStyle,

}) => {

    return (
        <Container style = {containerStyle}>
            <GenericText children = {text} style = {textStyle}/>
        </Container>
    );
};

export default Separator;