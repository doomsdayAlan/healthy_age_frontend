import * as React from 'react';
import Container from '../components/Container';
import GenericText from '../components/Text';
import { ContainerStyle } from '../styles/ContainerStyle';
import { useUser } from '../context/UserContext';
import ImageContainer from '../components/ImageContainer';
import { IMAGES } from '../constants/constants';
import { TextStyles } from '../styles/TextStyles';
import { ImageStyles } from '../styles/ImageContainerStyle';
import PressableItem from '../components/PressableItem';
import { AppStackParamList } from '../routes/AppStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import TabMenu from '../components/TabMenu';
import Separator from '../components/Separator';
import CalendarItem from '../components/CalendarItem';
import UserPatientListItem from '../components/user_patient_list_item';
import ItemTreatmentList from '../components/ItemTreatmentListItem';

type MainPageNavigationProp = StackNavigationProp<AppStackParamList>;

export default function MainPageScreenLayout(){

    const {user} = useUser();
    const navigation = useNavigation<MainPageNavigationProp>();
    
    const formatDate = (date: Date) => {
        const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      
        const dayName = days[date.getDay()];
        const day = date.getDate();
        const monthName = months[date.getMonth()];
        const year = date.getFullYear();
      
        return `${dayName} ${day} de ${monthName} de ${year}`;
      };

    const today = new Date();
    const formattedDate = formatDate(today);
    const Dates = [];
    for (let i = 0; i <= 5; i++) {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        Dates.push(nextDate);
      };

    const handleProfileNavigation = () => {
        navigation.navigate('ProfileScreen');
    };

    const handleNotificationsScreenNavigation = () => {
        navigation.navigate('NotificationsScreen');
    };

    const handleSettingsScreennNavigation = () => {
        navigation.navigate('SettingsScreen');
    };

    return (
        <Container
            style={ContainerStyle.MainPageMainContainer}
        >

            {user ? (
                <Container
                    style={ContainerStyle.MainPageMainContainer}
                >
                    <Container
                        style={ContainerStyle.MainPageUserContainer}
                    >
                        <PressableItem
                            onPress={handleProfileNavigation}
                        >
                            <ImageContainer 
                                source={user.profileImage ? user.profileImage : IMAGES.DEFAULT_USER_ICON}
                                style={ImageStyles.MainPageUserIconStyle}
                            />
                        </PressableItem>

                        <Container
                            style={ContainerStyle.MainPageSaluteContainer}
                        >
                            <GenericText
                                style={TextStyles.MainUserSaluteText}
                            >
                                ¡Hola, {user.firstName}!
                            </GenericText>

                            <GenericText
                                style={TextStyles.MainUserDateText}
                            >
                                {formattedDate}
                            </GenericText>
                        </Container>
                    </Container>

                    <Container 
                        style = {ContainerStyle.CalendarContainerStyle}
                    >
                        <Container
                            style = {ContainerStyle.CalendarStyle}
                        >
                            <CalendarItem 
                                date={Dates[0]} 
                                containerStyle = {ContainerStyle.CalendarTodayItemStyle} 
                                topTextStyle = {TextStyles.CalendarSelectedItemTextStyleTop}
                                bottomTextStyle = {TextStyles.CalendarSelectedItemTextStyleBottom}
                            />
                            <CalendarItem date={Dates[1]}/>
                            <CalendarItem date={Dates[2]}/>
                            <CalendarItem date={Dates[3]}/>
                            <CalendarItem date={Dates[4]}/>
                            <CalendarItem date={Dates[5]}/>

                        </Container>
                    </Container>

                    <Separator text='Tratamientos activos' containerStyle={ContainerStyle.OrangeSeparator} textStyle={TextStyles.OrangeSeparatorText}/>
                    
                    <Container
                        style = {ContainerStyle.ConatinerTreatmentListMainMenu}
                        contentContainerStyle = {ContainerStyle.ContentContainerScrolleableView}
                        showsVerticalScrollIndicator = {false}
                        scrollEnabled = {true}
                    >

                       <ItemTreatmentList
                            treatmentName={'Peste negra'}
                            totalMeds={3}
                            totalTakes={2}
                            containerStyle = {ContainerStyle.ConatinerTreatmentListItemMainMenu}
                            topTextSyle = {TextStyles.TreatmentListItemTextStyleTop}
                            bottomTextSyle = {TextStyles.TreatmentListItemTextStyleBottom}
                        />
                        
                    </Container>

                    <Separator text='Mis adultos mayores' containerStyle={ContainerStyle.OrangeSeparator} textStyle={TextStyles.OrangeSeparatorText}/>

                    <Container
                        style = {ContainerStyle.ConatinerPatientListMainMenu}
                        contentContainerStyle = {ContainerStyle.ContentContainerScrolleableView}
                        showsVerticalScrollIndicator = {false}
                        scrollEnabled = {true}
                    >
                        <UserPatientListItem 
                            source = {IMAGES.VIEJITA} 
                            text = 'Doña Mary' 
                            containerStyle = {ContainerStyle.ConatinerPatientListItemMainMenu}
                            iconImageStyle = {ImageStyles.IconPatientListMainMenu}
                            textStyle = {TextStyles.PatientListItemTextStyle}
                        />

                    </Container>

                    <Separator containerStyle={ContainerStyle.TransparentSeparator}/>

                    <TabMenu/>

                </Container>
                ) : (
                    <Container
                        style={ContainerStyle.MainPageErrorMainContainer}
                    >

                        <GenericText
                            style={TextStyles.MainErrorText}
                        >
                            ¡Uy no deberias estar aqui!
                        </GenericText>

                        <ImageContainer
                            source={IMAGES.ERROR_IMAGE}
                        />
                    </Container>
                )}
        </Container>
    );
}