import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const guidelineBaseWidth = 375; // Base del diseño (ancho)
const guidelineBaseHeight = 812; // Base del diseño (alto)

const scaleWidth = (size: number) => (width / guidelineBaseWidth) * size;
const scaleHeight = (size: number) => (height / guidelineBaseHeight) * size;
const scale = (size: number) => Math.min(scaleWidth(size), scaleHeight(size));

export const ImageStyles = StyleSheet.create({
    Logo: {
        width: width * 0.8,
        height: height * 0.5,
    },

    WelcomeImage: {
        width: width,
        height: height * 0.5,
    },

    BackArrow: {
        width: scale(50), // Ajustado con escala proporcional
        height: scale(50), // Ajustado con escala proporcional
    },

    NewAccountIcons: {
        width: scale(50), // Ajustado con escala proporcional
        height: scale(50), // Ajustado con escala proporcional
    },

    MainPageUserIconStyle: {
        width: scale(25), // Ajustado con escala proporcional
        height: scale(25), // Ajustado con escala proporcional
        marginRight: scale(10), // Ajustado con escala proporcional
    },

    ProfileScreenIconStyle: {
        width: scale(60), // Ajustado con escala proporcional
        height: scale(60), // Ajustado con escala proporcional
    },

    MainPageIconStyle: {
        width: scale(10), // Ajustado con escala proporcional
        height: scale(10), // Ajustado con escala proporcional
        margin: scale(2), // Ajustado con escala proporcional
    },

    TabMenuIconStyle: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },

    highlight: {
        borderBottomWidth: scale(2), // Ajustado con escala proporcional
        borderBottomColor: '#029CA7',
        paddingBottom: scale(5), // Ajustado con escala proporcional
    },

    IconPatientListMainMenu: {
        width: scale(38), // Ajustado con escala proporcional
        height: scale(38), // Ajustado con escala proporcional
        borderRadius: 50,
        alignSelf: 'center',
        resizeMode: 'cover',
        overflow: 'hidden',
        marginLeft: scale(5), // Ajustado con escala proporcional
        marginRight: scale(10), // Ajustado con escala proporcional
    },

    IconPatientListScreen: {
        width: scale(50), // Ajustado con escala proporcional
        height: scale(50), // Ajustado con escala proporcional
        borderRadius: 100,
        alignSelf: 'center',
        resizeMode: 'cover',
        marginLeft: scale(5), // Ajustado con escala proporcional
        marginVertical: scale(3), // Ajustado con escala proporcional
        overflow: 'hidden',
    },

    AddIcon: {
        width: scale(30), // Ajustado con escala proporcional
        height: scale(30), // Ajustado con escala proporcional
        marginLeft: scale(30), // Ajustado con escala proporcional
        marginTop: scale(4), // Ajustado con escala proporcional
    },

    IconButtonTextStyle: {
        width: scale(10), // Ajustado con escala proporcional
        height: scale(10), // Ajustado con escala proporcional
        marginRight: scale(5), // Ajustado con escala proporcional
    },
});
