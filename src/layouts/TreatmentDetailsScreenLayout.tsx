import * as React from 'react';
import { useState } from 'react';
import Container from '../components/Container';
import GenericText from '../components/Text';
import { ContainerStyle } from '../styles/ContainerStyle';
import BackButton from '../components/BackArrow';
import { TextStyles } from '../styles/TextStyles';
import ScreenTitle from '../components/ScreenTitle';
import GenericInput from '../components/Input';
import PressableItem from '../components/PressableItem';
import { useApi } from '../context/apiServicesContext';
import { Alert } from 'react-native';

type TreatmentDetailsScreenLayoutProps = {
    treatment: {
        id_tratamiento: string; // ID of the treatment to associate the medicine with
        nombre_tratamiento: string;
        medico: string;
        fecha_inicio: string;
        fecha_fin: string;
    };
};

export default function TreatmentDetailsScreenLayout({ treatment }: TreatmentDetailsScreenLayoutProps) {
    const { registerMedicine, registerMedication } = useApi(); // Access the API functions
    const [medicineName, setMedicineName] = useState('');
    const [medicationData, setMedicationData] = useState({
        fecha_inicio: '',
        hora_inicio: '',
        fecha_fin: '',
        intervalo: '',
        tipo_intervalo: '',
        dosis: '',
        unidad: '',
        via_administracion: '',
        existencia_actual: '',
        recordatorio: '',
        limite_recordatorio: '',
    });
    const [showForm, setShowForm] = useState(false);
    const [error, setError] = useState('');

    const handleAddMedicine = async () => {
        if (!medicineName || Object.values(medicationData).some((value) => !value)) {
            setError('Todos los campos son obligatorios.');
            return;
        }
        try {
            // Register the medicine
            const medicineResponse = await registerMedicine({
                id_medicamento: '',
                nombre_medicamento: medicineName,
            });

            // Register the medication with the treatment ID
            const medication = {
                ...medicationData,
                id_tratamiento: treatment.id_tratamiento,
                id_medicamento: medicineResponse.id_medicamento, // Assuming the response contains id_medicamento
                intervalo: parseInt(medicationData.intervalo),
                dosis: parseFloat(medicationData.dosis),
                existencia_actual: parseInt(medicationData.existencia_actual),
                recordatorio: parseInt(medicationData.recordatorio),
                limite_recordatorio: parseInt(medicationData.limite_recordatorio),
            };

            await registerMedication(medication);
            setMedicineName('');
            setMedicationData({
                fecha_inicio: '',
                hora_inicio: '',
                fecha_fin: '',
                intervalo: '',
                tipo_intervalo: '',
                dosis: '',
                unidad: '',
                via_administracion: '',
                existencia_actual: '',
                recordatorio: '',
                limite_recordatorio: '',
            });
            setShowForm(false);
            Alert.alert('Medicamento y medicación registrados exitosamente.');
        } catch (error) {
            console.error('Error al registrar medicamento y medicación:', error);
            Alert.alert('Ocurrió un error al registrar el medicamento y la medicación.');
        }
    };

    return (
        <Container style={ContainerStyle.MainContainerStyleTreatmentDetailsScreen}>
            <Container style={ContainerStyle.TitleTreatmentDetailsScreen}>
                <BackButton style={{ marginTop: 10 }} />
                <ScreenTitle
                    onPress={() => setShowForm(true)}
                    text={'Detalles de tratamiento'}
                    containerStyle={ContainerStyle.ScreenDetailsTreatmentTitleContainer}
                />
            </Container>

            <Container style={ContainerStyle.FormTreatmentDetailScreen}>
                <GenericText style={TextStyles.DetailTreatmentListTextStyle} numberOfLines={1}>
                    Nombre del tratamiento: {treatment.nombre_tratamiento}
                </GenericText>
                <GenericText style={TextStyles.DetailTreatmentListTextStyle} numberOfLines={1}>
                    Médico: {treatment.medico}
                </GenericText>

                <Container style={ContainerStyle.DatesTreatmentDetailsScreenContainerStyle}>
                    <Container style={ContainerStyle.ConatinerTreatmentListDates}>
                        <GenericText style={TextStyles.DateTextStyleTreatmentScreen}>
                            {treatment.fecha_inicio}
                        </GenericText>
                    </Container>

                    <GenericText style={TextStyles.DetailTreatmentListTextStyle}>a</GenericText>

                    <Container style={ContainerStyle.ConatinerTreatmentListDates}>
                        <GenericText style={TextStyles.DateTextStyleTreatmentScreen}>
                            {treatment.fecha_fin}
                        </GenericText>
                    </Container>
                </Container>
            </Container>

            {showForm && (
                <Container
                    style = {ContainerStyle.FormMedicineDetailScreen}
                    scrollEnabled = {true}
                >
                    <GenericInput
                        headerText="Nombre del Medicamento"
                        value={medicineName}
                        onChangeText={setMedicineName}
                        placeholder="Ingrese el nombre del medicamento"
                    />
                    {Object.keys(medicationData).map((field) => (
                        <GenericInput
                            key={field}
                            headerText={field.replace('_', ' ')}
                            value={medicationData[field as keyof typeof medicationData]}
                            onChangeText={(value) =>
                                setMedicationData({ ...medicationData, [field]: value })
                            }
                            placeholder={`Ingrese ${field.replace('_', ' ')}`}
                        />
                    ))}
                    {error && <GenericText>{error}</GenericText>}

                    <Container
                        style = {ContainerStyle.ContainerTreatmentFormButtons}
                    >
                        <PressableItem 
                            onPress={handleAddMedicine}
                            style = {ContainerStyle.TreatmentFormButtonStyle}   
                        >
                            <GenericText>Guardar</GenericText>
                        </PressableItem>
                        <PressableItem
                            onPress={() => {
                                setShowForm(false);
                                setError('');
                            }}
                            style = {ContainerStyle.TreatmentFormButtonStyle}
                        >
                            <GenericText>Cancelar</GenericText>
                        </PressableItem>
                    </Container>
                </Container>
            )}
        </Container>
    );
}
