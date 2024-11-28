import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const scaleFont = (size: number) => size * PixelRatio.getFontScale();

export const TextStyles = StyleSheet.create({

    SetUpScreenText: {
        fontFamily: 'Nunito-Italic',
        fontSize: scaleFont(50),
        color: '#00796b',
    },

    WelcomeScreenText_1: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(50),
        color: '#ff8659',
        textAlign: 'center',
    },

    WelcomeScreenText_2: {
        fontFamily: 'Nunito-Regular',
        fontSize: scaleFont(20),
        color: '#79797b',
        textAlign: 'center',
        marginTop: scaleFont(5),
        width: width * 0.5,
    },

    WelcomeScreenText_3: {
        fontFamily: 'Nunito-Bold',
        fontSize: scaleFont(20),
        color: '#FF4601',
        textAlign: 'center',
        marginTop: 20,
        width: width * 0.3,
    },

    WelcomeScreenButtonText: {
        fontFamily: 'Nunito-Bold',
        fontSize: scaleFont(25),
        color: '#000000',
        textAlign: 'center',
    },

    NewAccountScreenButtonText: {
        fontFamily: 'Nunito-Bold',
        fontSize: scaleFont(25),
        color: '#000000',
        textAlign: 'center',
        marginTop: scaleFont(6),
    },

    MailConfirmationScreenButtonText: {
        fontFamily: 'Nunito-Bold',
        fontSize: scaleFont(25),
        color: '#000000',
        textAlign: 'center',
        marginTop: scaleFont(6),
    },

    NewAccountText_1: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(25),
        color: '#ff8659',
        marginBottom: scaleFont(7),
    },
    
    NewAccountText_2: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(25),
        color: '#000000',
    },

    NewAccountText_3: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(15),
        textAlign: 'center',
        color: '#000000',
    },

    NewAccountText_4: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(15),
        textAlign: 'center',
        color: '#ff8659',
    },

    MailConfirmationText_1: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(30),
        color: '#ff8659',
        marginBottom: scaleFont(7),
        marginLeft: scaleFont(15),
        marginTop: scaleFont(5),
        textAlign: 'center',
    },

    MailConfirmationText_2: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(30),
        color: '#000000',
        marginTop: scaleFont(60),
        textAlign: 'center',
    },

    MailConfirmationText_3: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(15),
        color: '#ff8659',
        marginTop: scaleFont(1),
        marginBottom: scaleFont(45),
        textAlign: 'right',
    },

    LoginText_1: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(30),
        color: '#ff8659',
        marginBottom: scaleFont(7),
        marginLeft: scaleFont(20),
        marginTop: scaleFont(15),
        textAlign: 'center',
    },

    MainErrorText: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(30),
        color: '#ff8659',
        marginBottom: scaleFont(7),
        textAlign: 'center',
    },

    MainUserSaluteText: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(25),
        color: '#ff8659',
    },

    MainUserDateText: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(15),
        color: '#000000',
    },

    OrangeSeparatorText: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(25),
        color: '#000000',
        textAlign: 'center',
    },

    CalendarItemTextStyleTop: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(25),
        color: '#000000',
        textAlign: 'center',
    },

    CalendarItemTextStyleBottom: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(12),
        color: '#000000',
        textAlign: 'center',
    },

    CalendarSelectedItemTextStyleTop: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(25),
        color: '#ffffff',
        textAlign: 'center',
    },

    CalendarSelectedItemTextStyleBottom: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(12),
        color: '#ffffff',
        textAlign: 'center',
    },

    PatientListItemTextStyle: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(30),
        color: '#000000',
        width: '40%',
        textAlign: 'left',
        marginBottom: scaleFont(5),
    },
    
    TreatmentListItemTextStyleTop: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(30),
        color: '#ff8659',
        textAlign: 'left',
        marginLeft: scaleFont(30),
    },

    TreatmentListItemTextStyleBottom: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(18),
        color: '#000000',
        textAlign: 'left',
        marginLeft: scaleFont(30),
        marginBottom: scaleFont(5),
    },

    TreatmentListItemTextStyleBottomButton: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(25),
        color: '#FFFFFF',
        textAlign: 'center',
    },

    ScreenTitleTextStyle: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(30),
        color: '#029CA7',
    },

    DateTextStyleTreatmentScreen: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(15),
        color: '#029CA7',
        textAlign: 'center',
    },

    PatientNameTextStylePatientScreen: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(20),
        color: '#000000',
        textAlign: 'left',
        marginLeft: scaleFont(15),
    },

    PatientDataTextStylePatientScreen: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(15),
        color: '#000000',
        textAlign: 'left',
        marginLeft: scaleFont(15),
    },

    ProfileScreenNameStyle: {
        fontFamily: 'LeagueSpartan-Bold',
        fontSize: scaleFont(40),
        color: '#000000',
    },

    ProfileScreenButtonTextStyle: {
        fontFamily: 'LeagueSpartan-Regular',
        fontSize: scaleFont(20),
        color: '#000000',
    },
});
