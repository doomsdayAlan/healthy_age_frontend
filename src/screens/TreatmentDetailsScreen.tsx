import React from 'react';
import Container from '../components/Container';
import SafeArea from '../components/SafeArea';
import { SettingsScreenStyles } from '../styles/SettingsScreenStyles';
import TreatmentDetailsScreenLayout from '../layouts/TreatmentDetailsScreenLayout';
import { RouteProp, useRoute } from '@react-navigation/native';
import { AppStackParamList } from '../routes/AppStackParamList';

type TreatmentDetailsRouteProp = RouteProp<AppStackParamList, 'TreatmentDetailsScreen'>;

export default function TreatmentListDetails() {
    const route = useRoute<TreatmentDetailsRouteProp>();
    const { treatment } = route.params;

    return (
        <SafeArea style={SettingsScreenStyles.SafeAreaStyle}>
            <Container
                alignItems="center"
                backgroundColor="#F5F6FA"
                direction="column"
                justifyContent="center"
            >
                <TreatmentDetailsScreenLayout treatment={treatment} />
            </Container>
        </SafeArea>
    );
}
