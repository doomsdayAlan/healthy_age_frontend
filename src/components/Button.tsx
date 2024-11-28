import * as React from 'react';
import PressableItem from './PressableItem';
import LinearGradient from 'react-native-linear-gradient';
import Container from './Container';
import GenericText from './Text';
import { GestureResponderEvent, StyleProp, TextStyle, ViewStyle } from 'react-native';

type ButtonProps = {
    onPress?: (event: GestureResponderEvent) => void;
    text?: string;
    textStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    gradientStyle?: StyleProp<ViewStyle>;
    pressableItemStyle?: StyleProp<ViewStyle>;
}

const Button: React.FC<ButtonProps> = ({ 
    onPress,
    text,
    containerStyle,
    gradientStyle,
    textStyle,
    pressableItemStyle,
}) => {
    return (
        <PressableItem
            onPress={onPress}
            style={pressableItemStyle}
        >
            <LinearGradient
                colors={['#00a0a0', '#a0e0e0']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={gradientStyle}
            >
                <Container
                    style={containerStyle}
                >
                    <GenericText
                        style={textStyle}
                    >
                        {text}
                    </GenericText>
                </Container>
            </LinearGradient>
        </PressableItem>
    );
}

export default Button;