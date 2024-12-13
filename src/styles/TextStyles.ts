import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const guidelineBaseWidth = 375; // Base del diseño (ancho)
const scaleWidth = (size: number) => (width / guidelineBaseWidth) * size;

export const TextStyles = StyleSheet.create({
    SetUpScreenText: {
        fontFamily: 'Nunito-Italic',
        fontSize: scaleWidth(50),
        color: '#00796b',
    },

    WelcomeScreenText_1: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(50),
        color: '#ff8659',
        textAlign: 'center',
    },

    WelcomeScreenText_2: {
        fontFamily: 'Nunito-Regular',
        fontSize: scaleWidth(20),
        color: '#79797b',
        textAlign: 'center',
        marginTop: scaleWidth(5),
        width: width * 0.8,
    },

    WelcomeScreenText_3: {
        fontFamily: 'Nunito-Bold',
        fontSize: scaleWidth(25),
        color: '#FF4601',
        textAlign: 'center',
        marginTop: scaleWidth(20),
        width: width * 0.5,
    },

    WelcomeScreenButtonText: {
        fontFamily: 'Nunito-Bold',
        fontSize: scaleWidth(25),
        color: '#000000',
        textAlign: 'center',
    },

    NewAccountScreenButtonText: {
        fontFamily: 'Nunito-Bold',
        fontSize: scaleWidth(25),
        color: '#000000',
        textAlign: 'center',
        marginTop: scaleWidth(6),
    },

    MailConfirmationScreenButtonText: {
        fontFamily: 'Nunito-Bold',
        fontSize: scaleWidth(25),
        color: '#000000',
        textAlign: 'center',
        marginTop: scaleWidth(6),
    },

    NewAccountText_1: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(25),
        color: '#ff8659',
        marginBottom: scaleWidth(7),
    },
    
    NewAccountText_2: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(25),
        color: '#000000',
    },

    NewAccountText_3: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(15),
        textAlign: 'center',
        color: '#000000',
    },

    NewAccountText_4: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(15),
        textAlign: 'center',
        color: '#ff8659',
    },

    MailConfirmationText_1: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(30),
        color: '#ff8659',
        marginBottom: scaleWidth(7),
        marginLeft: scaleWidth(15),
        marginTop: scaleWidth(5),
        textAlign: 'center',
    },

    MailConfirmationText_2: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(30),
        color: '#000000',
        marginTop: scaleWidth(60),
        textAlign: 'center',
    },

    MailConfirmationText_3: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(15),
        color: '#ff8659',
        marginTop: scaleWidth(1),
        marginBottom: scaleWidth(45),
        textAlign: 'right',
    },

    LoginText_1: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(30),
        color: '#ff8659',
        marginBottom: scaleWidth(7),
        marginLeft: scaleWidth(20),
        marginTop: scaleWidth(15),
        textAlign: 'center',
    },

    MainErrorText: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(30),
        color: '#ff8659',
        marginBottom: scaleWidth(7),
        textAlign: 'center',
    },

    MainUserSaluteText: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(25),
        color: '#ff8659',
    },

    MainUserDateText: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(15),
        color: '#000000',
    },

    OrangeSeparatorText: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(25),
        color: '#000000',
        textAlign: 'center',
    },

    CalendarItemTextStyleTop: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(25),
        color: '#000000',
        textAlign: 'center',
    },

    CalendarItemTextStyleBottom: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(12),
        color: '#000000',
        textAlign: 'center',
    },

    CalendarSelectedItemTextStyleTop: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(25),
        color: '#ffffff',
        textAlign: 'center',
    },

    CalendarSelectedItemTextStyleBottom: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(12),
        color: '#ffffff',
        textAlign: 'center',
    },

    PatientListItemTextStyle: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(30),
        color: '#000000',
        width: '40%',
        textAlign: 'left',
        marginBottom: scaleWidth(5),
    },
    
    TreatmentListItemTextStyleTop: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(30),
        color: '#ff8659',
        textAlign: 'left',
        marginLeft: scaleWidth(30),
    },

    TreatmentListItemTextStyleBottom: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(18),
        color: '#000000',
        textAlign: 'left',
        marginLeft: scaleWidth(30),
        marginBottom: scaleWidth(5),
    },

    TreatmentListItemTextStyleBottomButton: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(25),
        color: '#FFFFFF',
        textAlign: 'center',
    },

    TreatmentListTextFormButton: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(20),
        color: '#FFFFFF',
        textAlign: 'center',
    },

    ScreenTitleTextStyle: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(28),
        marginTop: scaleWidth(8),
        color: '#029CA7',
    },

    DateTextStyleTreatmentScreen: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(15),
        color: '#029CA7',
        textAlign: 'center',
        marginTop: scaleWidth(5),
    },

    PatientNameTextStylePatientScreen: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(20),
        color: '#000000',
        textAlign: 'left',
        marginLeft: scaleWidth(15),
    },

    PatientDataTextStylePatientScreen: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(15),
        color: '#000000',
        textAlign: 'left',
        marginLeft: scaleWidth(15),
    },

    ProfileScreenNameStyle: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleWidth(40),
        color: '#000000',
    },

    ProfileScreenButtonTextStyle: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(20),
        color: '#000000',
    },

    DetailTreatmentListTextStyle: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleWidth(20),
        color: '#000000',
    },
});
