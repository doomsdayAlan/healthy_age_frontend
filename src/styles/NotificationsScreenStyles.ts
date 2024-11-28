import { StyleSheet, Dimensions, PixelRatio } from "react-native";

const { height } = Dimensions.get("window");

const scaleSize = (size: number) => size * PixelRatio.get();
export const NotificationsScreenStyles = StyleSheet.create({
    SafeAreaStyle: {
        flex: 1,
        backgroundColor: '#f9eedb',
    },
});