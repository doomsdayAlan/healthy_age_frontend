import { StyleSheet, Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const scaleSize = (size: number) => size * PixelRatio.get();

export const ContainerStyle = StyleSheet.create({

    SetUpScreenStyle: {
        alignItems: 'center',
        backgroundColor: '#f9eedb',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    SetUpScreenLayoutStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    WelcomePageScreenStyle: {
        alignItems: 'center',
        backgroundColor: '#f9eedb',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    WelcomePageScreenLayoutStyle: {
        alignItems: 'center',
        backgroundColor: '#F5F6FA',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    WelcomePageScreenLayoutStyleContainer_1: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    WelcomePageButtonContainerStyle: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    NewAccountMainContainer:{
        width: width * 0.9,
        height: '100%',
        backgroundColor:'#F5F6FA',
        flexDirection: 'column',
    },

    MailConfirmationMainContainer:{
        width: width * 0.9,
        height: '100%',
        backgroundColor:'#F5F6FA',
        flexDirection: 'column',
    },

    LoginScreenMainContainer:{
        width: width * 0.9,
        height: '100%',
        backgroundColor:'#F5F6FA',
        flexDirection: 'column',
    },

    MailConfirmationInputContainerStyle: {
        marginTop: scaleSize(30),
    },

    NewAccountArrowContainer: {
        flexDirection: 'row',
        marginTop: scaleSize(10),
    },

    MailConfirmationArrowContainer: {
        flexDirection: 'row',
        marginTop: scaleSize(8),
    },

    NewAccountFormContainer: {
        width: width * 0.9,
        flexDirection: 'column',
    },

    NewAccountFormItemContainerStyle:{
        marginBottom: scaleSize(10),

    },

    NewAccountNamesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    ProfileScreenNamesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },

    NewAccountToUPP: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: scaleSize(5),
    },

    NewAccountButtonTextContainerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },

    MailConfirmationButtonTextContainerStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },

    NewAccountRegisterButtonStyle: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    NewAccountIconsContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scaleSize(5),
    },

    LoginIconsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scaleSize(5),
    },

    LoginInputContainerStyle: {
        marginTop: scaleSize(30),
    },

    ProfileInputContainerStyle: {
        marginTop: scaleSize(3),
    },
    
    MainPageMainContainer:{
        width: width,
        height: '100%',
        backgroundColor:'#F5F6FA',
        flexDirection: 'column',
    },

    MainPageErrorMainContainer:{
        width: width * 0.9,
        height: '100%',
        backgroundColor:'#F5F6FA',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    MainPageUserContainer:{
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        marginTop: scaleSize(8),
        alignItems:'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    MainPageSaluteContainer:{
        width: '56%',
        flexDirection: 'column',
        marginRight: scaleSize(5),
    },

    MainPageNotificationSettingsContainer:{
        width: '20%',
        flexDirection: 'row',
    },

    MainPageIconsContainerStyle:{
        backgroundColor: '#e0e0e0',
        borderRadius: 50,
        margin: scaleSize(1),
    },

    MainTabMenuContainer: {
        backgroundColor: '#029CA7',
        borderRadius: scaleSize(25),
        height: scaleSize(25),
        width: '90%',
        position: 'absolute',
        bottom: scaleSize(10),
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scaleSize(10),
        alignSelf: 'center',
    },

    TabMenuIconsContainer: {
        flexDirection: 'row',
    },

    OrangeSeparator: {
        width: '100%',
        height: '4%',
        backgroundColor: '#F2D4C9',
    },

    TransparentSeparator: {
        width: '100%',
        height: '12%',
        backgroundColor: 'transparent',
    },

    LineSeparator: {
        width: '100%',
        height: 2,
        backgroundColor: '#DCDCDC',
        marginTop: scaleSize(3),
        marginBottom: scaleSize(3),
    },

    CalendarStyle: {
        width: '85%',
        height: '70%',
        justifyContent: 'space-between',
        marginTop: scaleSize(5),
        flexDirection: 'row',
    },

    CalendarContainerStyle: {
        flexDirection: 'row',
        width: '100%',
        height: '13%',
        justifyContent: 'center',
    },

    CalendarItemStyle: {
        width: '15%',
        height: '100%',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#FF7F50',
        borderRadius: scaleSize(8),
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    CalendarTodayItemStyle: {
        width: '15%',
        height: '100%',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#029CA7',
        borderRadius: scaleSize(8),
        justifyContent: 'center',
        backgroundColor: '#029CA7',
    },

    CalendarItemInnerContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    RightArrowPatientList: {
        width: scaleSize(10),
        height: scaleSize(10),
        marginLeft: scaleSize(40),
    },

    RightArrowTreatmentList: {
        width: scaleSize(10),
        height: scaleSize(10),
    },

    EditStyle: {
        width: scaleSize(12),
        height: scaleSize(12),
        marginHorizontal: scaleSize(2),
    },

    DeleteStyle: {
        width: scaleSize(8),
        height: scaleSize(8),
        marginHorizontal: scaleSize(2),
    },

    ConatinerPatientListMainMenu: {
        flexDirection: 'column',
        width: '90%',
        height: '30%',
        alignSelf: 'center',
        marginTop: scaleSize(5),
    },

    ConatinerTreatmentListMainMenu: {
        flexDirection: 'column',
        width: '90%',
        height: '30%',
        alignSelf: 'center',
        marginTop: scaleSize(4),
    },

    ContentContainerScrolleableView: {
        alignItems: 'center',
        alignContent: 'center',
    },

    ConatinerPatientListItemMainMenu: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        borderRadius: 20,
        backgroundColor: '#E6E6E4',
        marginBottom: scaleSize(5),
        alignItems: 'center',
        flex: 1,
    },

    ConatinerTreatmentListItemMainMenu: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        borderRadius: 20,
        backgroundColor: '#E6E6E4',
        marginBottom: scaleSize(5),
        alignItems: 'center',
        flex: 1,
    },

    ConatinerTreatmentListItemScreen: {
        flexDirection: 'row',
        width: '100%',
        height: scaleSize(65),
        borderRadius: 20,
        backgroundColor: '#E6E6E4',
        marginBottom: scaleSize(5),
        alignItems: 'center',
    },

    ConatinerTreatmentListDates: {
        flexDirection: 'column',
        width: '45%',
        height: '100%',
        borderRadius: 20,
        backgroundColor: '#EFEFEF',
        alignSelf: 'center',
    },

    ContainerTextContainerTreatemntListItem: {
        flexDirection: 'column',
        width: '90%',
        height: '100%',
        alignSelf: 'center',
    },
    

    DefaultScreenContainer: {
        flexDirection: 'column',
        width: '100%',
        height: '101%',
        alignContent: 'center',
        alignItems: 'center',
    },

    ProfileScreenContainer: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignContent: 'center',
        alignItems: 'center',
    },

    ScreenTitleContainer: {
        flexDirection: 'row',
        height: '10%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    DatesTreatmentScreenContainerStyle: {
        flexDirection: 'row',
        height: '15%',
        width: '100%',
        justifyContent: 'space-between',
        marginLeft: scaleSize(10),
    },

    TreatmentButtonStyle: {
        flexDirection: 'row',
        height: '100%',
        width: '80%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#029CA7',
        borderRadius: 20,
        alignSelf: 'center',
    },

    BottomContainerTreatmentScreenItem: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scaleSize(8),
        marginLeft: scaleSize(18),
    },

    PatientListItemContainer: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#E6E6E4',
        marginBottom: scaleSize(10),
        alignItems: 'center',
        
    },

    TextPatientListItemContainerStyle: {
        flexDirection: 'column',
        width: '60%',
    },

    PatientListItemButtonsContainer: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        marginTop: scaleSize(5),
        marginLeft: scaleSize(5),
    },

    ProfileScreenMainContainerStyle: {
        height: '100%',
        width: '90%',

    },

    ProfileScreenInputsContainer: {
        width: '80%',
        height: '100%',
    },
    
    CalendarItemScreenContainer: {
        flexDirection: 'row',
        height: '10%',
        flexWrap: 'wrap',
        justifyContent: 'center',
    }, 
});