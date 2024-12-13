import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Escalado adaptado al tamaño de pantalla
const guidelineBaseWidth = 375; // Base del diseño (ancho)
const guidelineBaseHeight = 812; // Base del diseño (alto)

const scaleWidth = (size: number) => (width / guidelineBaseWidth) * size;
const scaleHeight = (size: number) => (height / guidelineBaseHeight) * size;
const scale = (size: number) => Math.min(scaleWidth(size), scaleHeight(size));

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
        justifyContent: 'flex-start'
    },

    MailConfirmationInputContainerStyle: {
        marginTop: scale(30),
    },

    NewAccountArrowContainer: {
        flexDirection: 'row',
        marginTop: scale(10),
    },

    MailConfirmationArrowContainer: {
        flexDirection: 'row',
        marginTop: scale(8),
    },

    NewAccountFormContainer: {
        width: width * 0.9,
        flexDirection: 'column',
    },

    NewAccountFormItemContainerStyle:{
        marginBottom: scale(10),

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
        marginBottom: scale(5),
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
        marginTop: scale(5),
    },

    LoginIconsContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: scale(5),
    },

    LoginInputContainerStyle: {
        marginTop: scale(30),
    },

    ProfileInputContainerStyle: {
        marginTop: scale(3),
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
        marginTop: scale(8),
        alignItems:'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    MainPageSaluteContainer:{
        width: '56%',
        flexDirection: 'column',
        marginRight: scale(5),
    },

    MainPageNotificationSettingsContainer:{
        width: '20%',
        flexDirection: 'row',
    },

    MainPageIconsContainerStyle:{
        backgroundColor: '#e0e0e0',
        borderRadius: 50,
        margin: scale(1),
    },

    MainTabMenuContainer: {
        backgroundColor: '#029CA7',
        borderRadius: 50,
        height: '10%',
        width: '90%',
        position: 'absolute',
        bottom: scale(10),  
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
    },

    TabMenuIconsContainer: {
        flexDirection: 'row',
        
    },

    TabMenuIconsElement: {
        width: '25%',
        height: '45%',
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
        marginTop: scale(3),
        marginBottom: scale(3),
    },

    CalendarStyle: {
        width: '85%',
        height: '70%',
        justifyContent: 'space-between',
        marginTop: scale(5),
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
        borderRadius: scale(8),
        justifyContent: 'center',
        backgroundColor: 'white',
    },

    CalendarTodayItemStyle: {
        width: '15%',
        height: '100%',
        flexDirection: 'row',
        borderWidth: 2,
        borderColor: '#029CA7',
        borderRadius: scale(8),
        justifyContent: 'center',
        backgroundColor: '#029CA7',
    },

    CalendarItemInnerContainerStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    RightArrowPatientList: {
        width: scale(10),
        height: scale(10),
        marginLeft: scale(40),
    },

    RightArrowTreatmentList: {
        width: scale(10),
        height: scale(10),
    },

    EditStyle: {
        width: scale(30),
        height: scale(30),
        marginHorizontal: scale(2),
    },

    DeleteStyle: {
        width: scale(20),
        height: scale(20),
        marginHorizontal: scale(2),
    },

    ConatinerPatientListMainMenu: {
        flexDirection: 'column',
        width: '90%',
        height: '30%',
        alignSelf: 'center',
        marginTop: scale(5),
    },

    ConatinerTreatmentListMainMenu: {
        flexDirection: 'column',
        width: '90%',
        height: '30%',
        alignSelf: 'center',
        marginTop: scale(4),
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
        marginBottom: scale(5),
        alignItems: 'center',
        flex: 1,
    },

    ConatinerTreatmentListItemMainMenu: {
        flexDirection: 'row',
        width: '100%',
        height: '40%',
        borderRadius: 20,
        backgroundColor: '#E6E6E4',
        marginBottom: scale(5),
        alignItems: 'center',
        flex: 1,
    },

    ConatinerTreatmentListItemScreen: {
        flexDirection: 'row',
        width: '100%',
        height: scale(150),
        borderRadius: 20,
        backgroundColor: '#E6E6E4',
        marginBottom: scale(5),
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

    ScreenDetailsTreatmentTitleContainer: {
        flexDirection: 'row',
        height: '100%',
        width: '80%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    },

    DatesTreatmentScreenContainerStyle: {
        flexDirection: 'row',
        height: '15%',
        width: '100%',
        justifyContent: 'space-between',
        marginLeft: scale(10),
    },

    DatesTreatmentDetailsScreenContainerStyle: {
        flexDirection: 'row',
        height: '40%',
        width: '100%',
        justifyContent: 'space-between',
        marginTop: scale(10),
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
        alignSelf: 'flex-start',
    },

    TreatmentFormButtonStyle: {
        flexDirection: 'row',
        height: '100%',
        width: '30%',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#029CA7',
        borderRadius: 20,
        alignSelf: 'center',
        marginHorizontal: scale(15),
    },

    TreatmentFormContainerStyle: {
        flexDirection: 'column',
        marginBottom: scale(20),
        width: '90%', 
    },

    BottomContainerTreatmentScreenItem: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: scale(8),
        marginLeft: scale(18),
    },

    PatientListItemContainer: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 20,
        backgroundColor: '#E6E6E4',
        marginBottom: scale(10),
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
        marginTop: scale(5),
        marginLeft: scale(5),
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

    ContainerTreatmentFormButtons: {
        flexDirection: 'row',
        width: '100%',
        marginTop: scale(10),
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },

    MainContainerStyleTreatmentDetailsScreen: {
        flexDirection: 'column',
        width: '100%',
        height: '100%'
    },

    TitleTreatmentDetailsScreen: {
        flexDirection: 'row',
        width: '100%',
        height: '8%',
        marginTop: scale(20),
    },

    FormTreatmentDetailScreen: {
        flexDirection: 'column',
        width: '90%',
        height: '15%',
        marginTop: scale(20),
        alignContent: 'center',
        alignSelf: 'center',
    },

    FormMedicineDetailScreen: {
        flexDirection: 'column',
        width: '90%',
        height: '100%',
        alignContent: 'center',
        alignSelf: 'center',
    },
});