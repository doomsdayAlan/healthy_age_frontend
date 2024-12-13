import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';
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
import { useApi } from '../context/apiServicesContext';

type MainPageNavigationProp = StackNavigationProp<AppStackParamList>;

export default function MainPageScreenLayout() {
    const { user } = useUser();
    const { obtainTreatmentById } = useApi();
    const navigation = useNavigation<MainPageNavigationProp>();

    const [treatmentList, setTreatmentList] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);

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
    const Dates = Array.from({ length: 6 }, (_, i) => {
        const nextDate = new Date(today);
        nextDate.setDate(today.getDate() + i);
        return nextDate;
    });

    // Función para obtener la lista de tratamientos
    const fetchTreatments = useCallback(async () => {
        if (user?.id_usuario) {
            try {
                setIsLoading(true);
                const response = await obtainTreatmentById(user.id_usuario);
                setTreatmentList(response || []); // Manejar lista vacía
            } catch (error) {
                console.error("Error al obtener lista de tratamientos:", error);
            } finally {
                setIsLoading(false);
            }
        }
    }, [obtainTreatmentById, user?.id_usuario]);

    // Llamar a fetchTreatments al montar el componente
    useEffect(() => {
        fetchTreatments();
    }, [fetchTreatments]);

    const handleProfileNavigation = () => {
        navigation.navigate('ProfileScreen');
    };

    return (
        <Container style={ContainerStyle.MainPageMainContainer}>
            {user ? (
                <Container style={ContainerStyle.MainPageMainContainer}>
                    <Container style={ContainerStyle.MainPageUserContainer}>
                        <PressableItem onPress={handleProfileNavigation}>
                            <ImageContainer
                                source={IMAGES.DEFAULT_USER_ICON}
                                style={ImageStyles.MainPageUserIconStyle}
                            />
                        </PressableItem>

                        <Container style={ContainerStyle.MainPageSaluteContainer}>
                            <GenericText style={TextStyles.MainUserSaluteText}>
                                ¡Hola, {user.nombre}!
                            </GenericText>

                            <GenericText style={TextStyles.MainUserDateText}>
                                {formattedDate}
                            </GenericText>
                        </Container>
                    </Container>

                    <Container style={ContainerStyle.CalendarContainerStyle}>
                        <Container style={ContainerStyle.CalendarStyle}>
                            {Dates.map((date, index) => (
                                <CalendarItem
                                    key={index}
                                    date={date}
                                    containerStyle={index === 0 ? ContainerStyle.CalendarTodayItemStyle : undefined}
                                    topTextStyle={index === 0 ? TextStyles.CalendarSelectedItemTextStyleTop : undefined}
                                    bottomTextStyle={index === 0 ? TextStyles.CalendarSelectedItemTextStyleBottom : undefined}
                                />
                            ))}
                        </Container>
                    </Container>

                    <Separator
                        text="Tratamientos activos"
                        containerStyle={ContainerStyle.OrangeSeparator}
                        textStyle={TextStyles.OrangeSeparatorText}
                    />

                    <Container
                        style={ContainerStyle.ConatinerTreatmentListMainMenu}
                        contentContainerStyle={ContainerStyle.ContentContainerScrolleableView}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={true}
                    >
                        {isLoading ? (
                            <GenericText>Cargando tratamientos...</GenericText>
                        ) : treatmentList.length > 0 ? (
                            treatmentList.map((treatment, index) => (
                                <ItemTreatmentList
                                    key={index}
                                    treatmentName={treatment.nombre_tratamiento}
                                    containerStyle={ContainerStyle.ConatinerTreatmentListItemMainMenu}
                                    topTextSyle={TextStyles.TreatmentListItemTextStyleTop}
                                    bottomTextSyle={TextStyles.TreatmentListItemTextStyleBottom}
                                />
                            ))
                        ) : (
                            <GenericText>No hay tratamientos activos.</GenericText>
                        )}
                    </Container>

                    <Separator
                        text="Mis adultos mayores"
                        containerStyle={ContainerStyle.OrangeSeparator}
                        textStyle={TextStyles.OrangeSeparatorText}
                    />

                    <Container
                        style={ContainerStyle.ConatinerPatientListMainMenu}
                        contentContainerStyle={ContainerStyle.ContentContainerScrolleableView}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={true}
                    >
                        <UserPatientListItem
                            source={IMAGES.VIEJITA}
                            text="Doña Mary"
                            containerStyle={ContainerStyle.ConatinerPatientListItemMainMenu}
                            iconImageStyle={ImageStyles.IconPatientListMainMenu}
                            textStyle={TextStyles.PatientListItemTextStyle}
                        />
                    </Container>

                    <Separator containerStyle={ContainerStyle.TransparentSeparator} />

                    <TabMenu />
                </Container>
            ) : (
                <Container style={ContainerStyle.MainPageErrorMainContainer}>
                    <GenericText style={TextStyles.MainErrorText}>
                        ¡Uy no deberías estar aquí!
                    </GenericText>

                    <ImageContainer source={IMAGES.ERROR_IMAGE} />
                </Container>
            )}
        </Container>
    );
}
