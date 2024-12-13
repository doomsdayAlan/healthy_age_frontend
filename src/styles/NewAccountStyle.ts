import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const guidelineBaseWidth = 375; // Base del diseño (ancho)
const guidelineBaseHeight = 812; // Base del diseño (alto)

const scaleWidth = (size: number) => (width / guidelineBaseWidth) * size;
const scaleHeight = (size: number) => (height / guidelineBaseHeight) * size;
const scale = (size: number) => Math.min(scaleWidth(size), scaleHeight(size));

export const NewAccountScreenStyles = StyleSheet.create({
    text: {
        fontSize: scale(30), // Ajustado con escala proporcional
        color: 'black',
    },

    SafeAreaStyle: {
        flex: 1,
        backgroundColor: '#f9eedb',
    },
});
