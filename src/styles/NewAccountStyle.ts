import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { height } = Dimensions.get("window");

const scaleSize = (size: number) => size * PixelRatio.get();
export const NewAccountScreenStyles = StyleSheet.create({

    text: {
        fontSize: scaleSize(30),
        color: 'black',
    },

    SafeAreaStyle: {
        flex: 1,
        backgroundColor: '#f9eedb',
    },
});