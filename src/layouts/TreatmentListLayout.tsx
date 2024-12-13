import * as React from 'react';
import Container from '../components/Container';
import { ContainerStyle } from '../styles/ContainerStyle';
import ScreenTitle from '../components/ScreenTitle';
import TabMenu from '../components/TabMenu';
import ItemTreatmentList from '../components/ItemTreatmentListItem';
import { TextStyles } from '../styles/TextStyles';
import ItemTreatmentListScreen from '../components/ItemTreatmentListItemScreen';
import Separator from '../components/Separator';
import { useApi } from '../context/apiServicesContext';
import { useUser } from '../context/UserContext';
import { useState } from 'react';
import GenericText from '../components/Text';
import GenericInput from '../components/Input';
import PressableItem from '../components/PressableItem';
import { useNavigation } from '@react-navigation/native';
import { AppStackParamList } from '../routes/AppStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';

type TreatmentScreenNavigationProp = StackNavigationProp<AppStackParamList>;

export default function TreatmentListLayout() {

    const { obtainTreatmentById, registerTreatment, deleteTreatment, editTreatment } = useApi();
    const { user } = useUser();
    const navigation = useNavigation<TreatmentScreenNavigationProp>();
    const [treatmentList, setTreatmentList] = React.useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [currentTreatmentId, setCurrentTreatmentId] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        medico: '',
        nombre_tratamiento: '',
        fecha_inicio: '',
        fecha_fin: '',
        id_usuario: '',
    });

    const handleAddItem = () => {
        setShowForm(true);
        setIsEditing(false);
        setFormData({
            medico: '',
            nombre_tratamiento: '',
            fecha_inicio: '',
            fecha_fin: '',
            id_usuario: '',
        });
    };

    const handleCancel = () => {
        setShowForm(false);
        setIsEditing(false);
    };

    const handleDelete = async (id_tratamiento: string) => {
        try {
            await deleteTreatment(id_tratamiento);

            // Actualizar la lista después de eliminar
            if (user?.id_usuario) {
                const updatedList = await obtainTreatmentById(user.id_usuario);
                setTreatmentList(updatedList || []);
            }
        } catch (error) {
            console.error("Error al eliminar el tratamiento:", error);
        }
    };

    const handleEdit = (treatment: any) => {
        setCurrentTreatmentId(treatment.id_tratamiento);
        setFormData({
            medico: treatment.medico,
            nombre_tratamiento: treatment.nombre_tratamiento,
            fecha_inicio: treatment.fecha_inicio,
            fecha_fin: treatment.fecha_fin,
            id_usuario: treatment.id_usuario,
        });
        setShowForm(true);
        setIsEditing(true);
    };

    const handleSubmit = async () => {
        if (user?.id_usuario) {
            try {
                if (isEditing && currentTreatmentId) {
                    
                    await editTreatment(currentTreatmentId, formData);
                } else {
                    
                    const newTreatment = {
                        ...formData,
                        id_usuario: user.id_usuario
                    };
                    await registerTreatment(newTreatment);
                }

                // Fetch updated treatment list
                const updatedList = await obtainTreatmentById(user.id_usuario);
                setTreatmentList(updatedList || []);
                setShowForm(false);
                setFormData({ medico: '', nombre_tratamiento: '', fecha_inicio: '', fecha_fin: '', id_usuario: user.id_usuario });
                setIsEditing(false);
                setCurrentTreatmentId(null);
            } catch (error) {
                console.error('Error al registrar o editar tratamiento:', error);
            }
        }
    };

    const handleDetails = (treatment: any) => {
        navigation.navigate('TreatmentDetailsScreen', { treatment });
    };

    React.useEffect(() => {
        const fetchTreatments = async () => {
            if (user?.id_usuario) {
                try {
                    const response = await obtainTreatmentById(user.id_usuario);
                    setTreatmentList(response || []); // Asegúrate de manejar un valor vacío
                } catch (error) {
                    console.error("Error al obtener lista de tratamientos:", error);
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchTreatments();
    }, [user?.id_usuario]);

    return (
        <Container
            style={ContainerStyle.DefaultScreenContainer}
        >
            <ScreenTitle text='Lista de tratamientos' onPress={handleAddItem} />

            {showForm && (
                <Container 
                    style = {ContainerStyle.TreatmentFormContainerStyle}
                >
                    <GenericInput
                        headerText="Nombre del Tratamiento"
                        value={formData.nombre_tratamiento}
                        onChangeText={(text: any) => setFormData({ ...formData, nombre_tratamiento: text })}
                    />
                    <GenericInput
                        headerText="Nombre del Médico"
                        value={formData.medico}
                        onChangeText={(text: any) => setFormData({ ...formData, medico: text })}
                    />
                    <GenericInput
                        headerText="Fecha de Inicio"
                        placeholder="DD/MM/YYYY"
                        value={formData.fecha_inicio}
                        onChangeText={(text: any) => setFormData({ ...formData, fecha_inicio: text })}
                    />
                    <GenericInput
                        headerText="Fecha de Fin"
                        placeholder="DD/MM/YYYY"
                        value={formData.fecha_fin}
                        onChangeText={(text: any) => setFormData({ ...formData, fecha_fin: text })}
                    />
                    
                    <Container
                        style = {ContainerStyle.ContainerTreatmentFormButtons}
                    >
                        <PressableItem
                            onPress = {handleSubmit}
                            style = {ContainerStyle.TreatmentFormButtonStyle}
                        >
                            <GenericText style = {TextStyles.TreatmentListTextFormButton}>
                                Aceptar   
                            </GenericText>
                        </PressableItem>
                        <PressableItem
                            onPress = {handleCancel}
                            style = {ContainerStyle.TreatmentFormButtonStyle}
                        >
                            <GenericText style = {TextStyles.TreatmentListTextFormButton}>
                                Cancelar   
                            </GenericText>
                        </PressableItem>
                    </Container>
                </Container>
            )}

            <Container
                contentContainerStyle={ContainerStyle.ContentContainerScrolleableView}
                showsVerticalScrollIndicator={false}
                scrollEnabled={true}
            >
                {isLoading ? (
                    <GenericText>Cargando tratamientos...</GenericText>
                ) : treatmentList.length > 0 ? (
                    treatmentList.map((treatment, index) => (
                        <ItemTreatmentListScreen
                            key={index}
                            treatmentName={treatment.nombre_tratamiento}
                            dateStart={treatment.fecha_inicio}
                            dateEnd={treatment.fecha_fin}
                            name={"Dr. " + treatment.medico}
                            containerStyle={ContainerStyle.ConatinerTreatmentListItemScreen}
                            topTextStyle={TextStyles.TreatmentListItemTextStyleTop}
                            bottomTextStyle={TextStyles.TreatmentListItemTextStyleBottom}
                            onPressDelete={() => handleDelete(treatment.id_tratamiento)}
                            onPressEdit={() => handleEdit(treatment)}
                            onPressDetails={() => handleDetails(treatment)}
                        />
                    ))
                ) : (
                    <GenericText>No hay tratamientos activos.</GenericText>
                )}
            </Container>

            <Separator containerStyle={ContainerStyle.TransparentSeparator} />

            <TabMenu />
        </Container>
    );
}
