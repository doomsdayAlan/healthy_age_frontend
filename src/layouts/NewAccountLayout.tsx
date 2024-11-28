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

type NewAccountNavigationProp = StackNavigationProp<AuthStackParamList, 'NewAccountScreen'>;

export default function NewAccountScreenLayout() {
    const navigation = useNavigation<NewAccountNavigationProp>();
    const { registerUser } = useUser();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const isValidForm = () => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!name || !surname || !emailRegex.test(email) || pin.length !== 4 || !phoneNumber) {
            Alert.alert("Por favor, completa todos los campos correctamente.");
            return false;
        }
        return true;
    };

    const handleNavigateToMailConfirmation = () => {
        if (isValidForm()) {
            const userData = {
                firstName: name,
                lastName: surname,
                email: email,
                pin: pin,
                birthDate: dateOfBirth,
                phoneNumber: phoneNumber,
                profileImage: IMAGES.DEFAULT_USER_ICON,
            };

            registerUser(userData);
            navigation.navigate('MailConfirmationScreen');
        }
    };

    const handleRegistrationWithGoogle = () => {}

    const handleRegistrationWithFacebook = () => {}

    return (
        <Container style={ContainerStyle.NewAccountMainContainer}>
            <Container style={ContainerStyle.NewAccountArrowContainer}>
                <BackButton style={ButtonStyles.ArrowBackButton} />
                <GenericText style={TextStyles.NewAccountText_1}>Crear cuenta nueva</GenericText>
            </Container>

            <Container style={ContainerStyle.NewAccountFormContainer}>
                <Container style={ContainerStyle.NewAccountNamesContainer}>
                    <GenericInput
                        headerText='Nombre'
                        placeholder='Nombre'
                        containerStyle={{ width: '48%' }}
                        value={name}
                        onChangeText={setName}
                    />
                    <GenericInput
                        headerText='Apellido'
                        placeholder='Apellido'
                        containerStyle={{ width: '48%' }}
                        value={surname}
                        onChangeText={setSurname}
                    />
                </Container>

                <GenericInput
                    headerText='Correo electrónico'
                    placeholder='example@example.com'
                    containerStyle={ContainerStyle.NewAccountFormItemContainerStyle}
                    value={email}
                    onChangeText={setEmail}
                />
                <GenericInput
                    headerText='PIN de seguridad'
                    placeholder='****'
                    containerStyle={ContainerStyle.NewAccountFormItemContainerStyle}
                    value={pin}
                    onChangeText={setPin}
                    secureTextEntry
                    maxLength={4}
                />
                <GenericInput
                    headerText='Fecha de nacimiento'
                    placeholder='DD / MM / YYYY'
                    containerStyle={ContainerStyle.NewAccountFormItemContainerStyle}
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                />
                <GenericInput
                    headerText='Teléfono'
                    placeholder='+123 567 89000'
                    containerStyle={ContainerStyle.NewAccountFormItemContainerStyle}
                    value={phoneNumber}
                    onChangeText={setPhoneNumber}
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
                        text='Registrarse'
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
