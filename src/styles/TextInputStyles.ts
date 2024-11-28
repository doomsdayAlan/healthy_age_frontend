import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { width, height } = Dimensions.get("window");

const scaleSize = (size: number) => size * PixelRatio.get();

export const TextInputStyles = StyleSheet.create({
    GenericTextInputStyle: {
        backgroundColor: '#e0e0e0',
        padding: 12,
        borderRadius: 10,
        fontSize: 16,
    },
});