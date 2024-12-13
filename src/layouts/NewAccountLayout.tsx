import * as React from 'react';
import { useState } from 'react';
import Container from '../components/Container';
import GenericText from '../components/Text';
import BackButton from '../components/BackArrow';
import { ButtonStyles } from '../styles/ButtonsStyles';
import { TextStyles } from '../styles/TextStyles';
import { ContainerStyle } from '../styles/ContainerStyle';
import GenericInput from '../components/Input';
import Button from '../components/Button';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../routes/AuthStackParamList';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';
import { useUser } from '../context/UserContext';
import { IMAGES } from '../constants/constants';
import ImageContainer from '../components/ImageContainer';
import PressableItem from '../components/PressableItem';
import { ImageStyles } from '../styles/ImageContainerStyle';

type NewAccountNavigationProp = StackNavigationProp<AuthStackParamList>;

export default function NewAccountScreenLayout() {
    const navigation = useNavigation<NewAccountNavigationProp>();
    const { registerUser, validateUser, user } = useUser();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [correo, setCorreo] = useState('');
    const [pin_seguridad, setPinSeguridad] = useState('');
    const [fecha_nacimiento, setFechaNacimiento] = useState('');
    const [telefono, setTelefono] = useState('');

    const isValidForm = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!firstName || !lastName || !emailRegex.test(correo) || pin_seguridad.length !== 5 || !telefono || !fecha_nacimiento) {
            Alert.alert('Por favor, completa todos los campos correctamente.');
            return false;
        }
        return true;
    };

    const handleNavigateToMailConfirmation = async () => {
        if (isValidForm()) {
            const userData = {
                nombre: `${firstName} ${lastName}`,
                correo,
                id_usuario: '',
                telefono,
                pin_seguridad,
                fecha_nacimiento,
                clave_api: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                rol: 1,
                token_usuario: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjM2ZDg1YTgxY2Q4NGE4N2Y5ODczOTY4ZGFmYjQ4YzU4NDNkYTliNzEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzL',
                id_cuidador: 'K1r2bz38FEgRTudHUMHx',
            };

            try{
                const response = await registerUser(userData);
                console.log(response);
                navigation.navigate('LoginScreen');
            }catch(error){
                Alert.alert('Error en la creacion de cuenta');
            }

        }
    };

    const handleRegistrationWithGoogle = () => {
        Alert.alert('Google Login', 'Funcionalidad aún no implementada.');
    };

    const handleRegistrationWithFacebook = () => {
        Alert.alert('Facebook Login', 'Funcionalidad aún no implementada.');
    };

    return (
        <Container style={ContainerStyle.NewAccountMainContainer}>
            <Container style={ContainerStyle.NewAccountArrowContainer}>
                <BackButton style={ButtonStyles.ArrowBackButton} />
                <GenericText style={TextStyles.NewAccountText_1}>Crear cuenta nueva</GenericText>
            </Container>

            <Container style={ContainerStyle.NewAccountFormContainer}>
                <Container style={ContainerStyle.NewAccountNamesContainer}>
                    <GenericInput
                        headerText="Nombre"
                        placeholder="Nombre"
                        containerStyle={{ width: '48%' }}
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <GenericInput
                        headerText="Apellido"
                        placeholder="Apellido"
                        containerStyle={{ width: '48%' }}
                        value={lastName}
                        onChangeText={setLastName}
                    />
                </Container>

                <GenericInput
                    headerText="Correo electrónico"
                    placeholder="example@example.com"
                    containerStyle={ContainerStyle.NewAccountFormItemContainerStyle}
                    value={correo}
                    onChangeText={setCorreo}
                />
                <GenericInput
                    headerText="PIN de seguridad"
                    placeholder="*****"
                    containerStyle={ContainerStyle.NewAccountFormItemContainerStyle}
                    value={pin_seguridad}
                    onChangeText={setPinSeguridad}
                    secureTextEntry
                    maxLength={5}
                />
                <GenericInput
                    headerText="Fecha de nacimiento"
                    placeholder="DD / MM / YYYY"
                    containerStyle={ContainerStyle.NewAccountFormItemContainerStyle}
                    value={fecha_nacimiento}
                    onChangeText={setFechaNacimiento}
                />
                <GenericInput
                    headerText="Teléfono"
                    placeholder="+123 567 89000"
                    containerStyle={ContainerStyle.NewAccountFormItemContainerStyle}
                    value={telefono}
                    onChangeText={setTelefono}
                    keyboardType="phone-pad"
                />

                <GenericText style={TextStyles.NewAccountText_3}>Al continuar, usted acepta los</GenericText>

                <Container style={ContainerStyle.NewAccountToUPP}>
                    <GenericText style={TextStyles.NewAccountText_4}>Términos de uso</GenericText>
                    <GenericText style={TextStyles.NewAccountText_3}>&nbsp;y&nbsp;</GenericText>
                    <GenericText style={TextStyles.NewAccountText_4}>política de privacidad</GenericText>
                    <GenericText style={TextStyles.NewAccountText_3}>.</GenericText>
                </Container>

                <Container style={ContainerStyle.NewAccountButtonTextContainerStyle}>
                    <Button
                        text="Registrarse"
                        containerStyle={ContainerStyle.NewAccountButtonTextContainerStyle}
                        textStyle={TextStyles.NewAccountScreenButtonText}
                        gradientStyle={ButtonStyles.gradient}
                        onPress={handleNavigateToMailConfirmation}
                    />
                </Container>

                <GenericText style={TextStyles.NewAccountText_4}>o regístrate con</GenericText>

                <Container style={ContainerStyle.LoginIconsContainerStyle}>
                    <PressableItem onPress={handleRegistrationWithGoogle}>
                        <ImageContainer source={IMAGES.GOOGLE_LOGO} style={ImageStyles.NewAccountIcons} />
                    </PressableItem>
                    <PressableItem onPress={handleRegistrationWithFacebook}>
                        <ImageContainer source={IMAGES.FACEBOOK_LOGO} style={ImageStyles.NewAccountIcons} />
                    </PressableItem>
                </Container>
            </Container>
        </Container>
    );
}
