import React from "react";
import { ContainerStyle } from "../styles/ContainerStyle";
import Container from "./Container";
import ImageContainer from "./ImageContainer";
import { IMAGES } from "../constants/constants";
import { ImageStyles } from "../styles/ImageContainerStyle";
import PressableItem from "./PressableItem";
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from "../routes/AppStackParamList";
import { useNavigation } from "@react-navigation/native";
import { useNavigationContext } from "../context/NavigationContext";

type TabMenuNavigationProp = StackNavigationProp<AppStackParamList>;

const TabMenu = () => {
    const navigation = useNavigation<TabMenuNavigationProp>();

    const handleNavigate = (route: keyof AppStackParamList) => {
        if (route === "TreatmentDetailsScreen") {
            console.error("No se puede navegar a TreatmentDetailsScreen sin parámetros.");
            return;
        }
        navigation.navigate(route);
    };

    const { currentRoute } = useNavigationContext();

    return (
        <Container style={ContainerStyle.MainTabMenuContainer}>
            <Container style={ContainerStyle.TabMenuIconsContainer}>
                <PressableItem onPress={() => handleNavigate("MainPageScreen")} style={ContainerStyle.TabMenuIconsElement}>
                    <ImageContainer source={IMAGES.HOME_ICON} style={ImageStyles.TabMenuIconStyle} />
                </PressableItem>
                <PressableItem onPress={() => handleNavigate("TreatmentListScreen")} style={ContainerStyle.TabMenuIconsElement}>
                    <ImageContainer source={IMAGES.DRUGS_ICON} style={ImageStyles.TabMenuIconStyle} />
                </PressableItem>
                <PressableItem onPress={() => handleNavigate("PatientsScreen")} style={ContainerStyle.TabMenuIconsElement}>
                    <ImageContainer source={IMAGES.PATIENTS_ICON} style={ImageStyles.TabMenuIconStyle} />
                </PressableItem>
                <PressableItem onPress={() => handleNavigate("CalendarScreen")} style={ContainerStyle.TabMenuIconsElement}>
                    <ImageContainer source={IMAGES.CALENDAR_ICON} style={ImageStyles.TabMenuIconStyle} />
                </PressableItem>
            </Container>
        </Container>
    );
};

export default TabMenu;
