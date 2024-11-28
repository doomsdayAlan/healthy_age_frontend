import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const scaleImage = (size: number) => size * PixelRatio.get();

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
        width: scaleImage(18),
        height: scaleImage(18),
    },

    NewAccountIcons:{
        width: scaleImage(30),
        height: scaleImage(30),
    },

    MainPageUserIconStyle:{
        width: scaleImage(25),
        height: scaleImage(25),
        marginRight: scaleImage(10),
    },

    ProfileScreenIconStyle:{
        width: scaleImage(60),
        height: scaleImage(60),
    },

    MainPageIconStyle: {
        width: scaleImage(10),
        height: scaleImage(10),
        margin: scaleImage(2),
    },

    TabMenuIconStyle: {
        width: scaleImage(15),
        height: scaleImage(15),
        marginHorizontal: scaleImage(8),
        
    },

    highlight: {
        borderBottomWidth: 2,
        borderBottomColor: '#029CA7',
        paddingBottom: 5,
    },

    IconPatientListMainMenu: {
        width: 38,
        height: 38,
        borderRadius: 50,
        alignSelf: 'center',
        resizeMode: 'cover',
        overflow: 'hidden',
        marginLeft: scaleImage(5),
        marginRight: scaleImage(10),
    },

    IconPatientListScreen: {
        width: scaleImage(50),
        height: scaleImage(50),
        borderRadius: 100,
        alignSelf: 'center',
        resizeMode: 'cover',
        marginLeft: scaleImage(5),
        marginVertical: scaleImage(3),
        overflow: 'hidden',
    },

    AddIcon: {
        width: scaleImage(10),
        height: scaleImage(10),
        marginLeft: scaleImage(5),
        marginTop: scaleImage(4),
    },

    IconButtonTextStyle: {
        width: scaleImage(10),
        height: scaleImage(10),
        marginRight: scaleImage(5),
    },

});
