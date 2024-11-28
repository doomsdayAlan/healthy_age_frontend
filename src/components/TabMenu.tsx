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
        navigation.navigate(route);
    };

    const { currentRoute } = useNavigationContext();

    return (
        <Container style={ContainerStyle.MainTabMenuContainer}>
            <Container style={ContainerStyle.TabMenuIconsContainer}>
                <PressableItem onPress={() => handleNavigate("MainPageScreen")}>
                    <ImageContainer source={IMAGES.HOME_ICON} style={ImageStyles.TabMenuIconStyle} />
                </PressableItem>
                <PressableItem onPress={() => handleNavigate("TreatmentListScreen")}>
                    <ImageContainer source={IMAGES.DRUGS_ICON} style={ImageStyles.TabMenuIconStyle} />
                </PressableItem>
                <PressableItem onPress={() => handleNavigate("PatientsScreen")}>
                    <ImageContainer source={IMAGES.PATIENTS_ICON} style={ImageStyles.TabMenuIconStyle} />
                </PressableItem>
                <PressableItem onPress={() => handleNavigate("CalendarScreen")}>
                    <ImageContainer source={IMAGES.CALENDAR_ICON} style={ImageStyles.TabMenuIconStyle} />
                </PressableItem>
            </Container>
        </Container>
    );
};

export default TabMenu;
