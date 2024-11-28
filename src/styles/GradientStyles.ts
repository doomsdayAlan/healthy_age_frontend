import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export const GradientStyles = StyleSheet.create({

    GradientNewAccountStyle: {
        width: '60%',
    },
});
