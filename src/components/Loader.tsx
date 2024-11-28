import React from 'react';
import { ActivityIndicator, StyleProp, ViewStyle } from 'react-native';

type LoaderProps = {
    animating?: boolean;
    color?: string;
    size?: 'small' | 'large' | number;
    style?: StyleProp<ViewStyle>;
};

const Loader: React.FC<LoaderProps> = ({
    animating = true,
    color = '#000000',
    size = 'small',
    style,
}) => {
    return (
        <ActivityIndicator
            animating={animating}
            color={color}
            size={size}
            style={style}
        />
    );
};

export default Loader;