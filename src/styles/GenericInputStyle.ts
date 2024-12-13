import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Escalado adaptado al tamaño de pantalla
const guidelineBaseWidth = 375; // Base del diseño (ancho)
const guidelineBaseHeight = 812; // Base del diseño (alto)

const scaleWidth = (size: number) => (width / guidelineBaseWidth) * size;
const scaleHeight = (size: number) => (height / guidelineBaseHeight) * size;
const scale = (size: number) => Math.min(scaleWidth(size), scaleHeight(size));

export const GenericInputStyles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginBottom: scale(8),
    },
    headerText: {
        fontFamily: 'LeagueSpartan-Bold',
        marginBottom: scale(2),
        fontSize: scale(22),
        color: '#000',
    },
    inputContainer: {
        alignItems: 'flex-start',
        backgroundColor: '#e0e0e0',
        borderRadius: scale(5),
        width: '100%',
    },
    inputText: {
        fontFamily: 'LeagueSpartan-Regular',
        marginLeft: scale(5),
        fontSize: scale(20),
        width: '100%',
        color: '#000',
    },
});
