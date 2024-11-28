import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { height, width } = Dimensions.get("window");

const scaleSize = (size: number) => size * PixelRatio.get();

export const GenericInputStyles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginBottom: scaleSize(8),
    },
    headerText: {
        fontFamily: 'LeagueSpartan-Bold',
        marginBottom: scaleSize(2),
        fontSize: scaleSize(8),
        color: '#000',
    },
    inputContainer: {
        alignItems: 'flex-start',
        backgroundColor: '#e0e0e0',
        borderRadius: scaleSize(5),
        width: '100%',
    },
    inputText: {
        fontFamily: 'LeagueSpartan-Regular',
        marginLeft: scaleSize(5),
        fontSize: scaleSize(8),
        color: '#000',
    },
});
