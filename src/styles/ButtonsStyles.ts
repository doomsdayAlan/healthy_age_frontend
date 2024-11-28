import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const scaleSize = (size: number) => size * PixelRatio.get();

export const ButtonStyles = StyleSheet.create({

    gradient: {
        borderRadius: scaleSize(25),
        width: width * 0.65,
        height: height * 0.055,
        marginBottom: scaleSize(5),
    },

    ArrowBackButton: {
        marginRight: scaleSize(14),
    },

    ArrowBackButtonMC: {
        marginRight: scaleSize(14),
        marginTop: scaleSize(6),
    },

    ArrowBackButtonLogin: {
        marginRight: scaleSize(14),
        marginTop: scaleSize(6),
    },

    ArrowBackButtonScreens: {
        marginTop: scaleSize(3),
    },
});
