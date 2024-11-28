import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { height } = Dimensions.get("window");

const scaleSize = (size: number) => size * PixelRatio.get();

export const LoaderStyles = StyleSheet.create({
    SetUpScreenLoader: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleSize(35),
    },
});
