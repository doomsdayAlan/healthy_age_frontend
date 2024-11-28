import * as React from 'react';
import { useState, useContext } from 'react';
import Container from '../components/Container';
import GenericText from '../components/Text';
import BackButton from '../components/BackArrow';
import { ButtonStyles } from '../styles/ButtonsStyles';
import { ContainerStyle } from '../styles/ContainerStyle';
import { TextStyles } from '../styles/TextStyles';
import GenericInput from '../components/Input';
import PressableItem from '../components/PressableItem';
import Button from '../components/Button';
import { AppStackParamList } from '../routes/AppStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { AccountConnectionContext } from '../context/AccountConnectionContext';
import { useUser } from '../context/UserContext';
import ImageContainer from '../components/ImageContainer';
import { IMAGES } from '../constants/constants';
import { ImageStyles } from '../styles/ImageContainerStyle';

type LoginNavigationProp = StackNavigationProp<AppStackParamList>;

export default function LoginScreenLayout() {
    const navigation = useNavigation<LoginNavigationProp>();
    const { setConnection } = useContext(AccountConnectionContext);
    const { validateUser } = useUser();
    const [email, setEmail] = useState('');
    const [pin, setPin] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        if (validateUser(email, pin)) {
            setConnection(true);
            navigation.navigate('MainPageScreen');
        } else {
            setErrorMessage('Correo o PIN incorrecto.');
        }
    };

    const handleLoginWithGoogle = () => {

    };

    const handleLoginWithFacebook = () => {

    };

    const handleMissingPIN = () => {

    };

    return (
        <Container style={ContainerStyle.LoginScreenMainContainer}>
            <Container style={ContainerStyle.MailConfirmationArrowContainer}>
                <BackButton style={ButtonStyles.ArrowBackButtonLogin} />
                <GenericText style={TextStyles.LoginText_1}>Iniciar sesión</GenericText>
            </Container>

            <GenericInput
                headerText='Correo electrónico'
                placeholder='example@example.com'
                containerStyle={ContainerStyle.LoginInputContainerStyle}
                value={email}
                onChangeText={setEmail}
            />

            <GenericInput
                headerText='PIN de seguridad'
                placeholder='****'
                containerStyle={ContainerStyle.LoginInputContainerStyle}
                value={pin}
                onChangeText={setPin}
                secureTextEntry
                maxLength={4}
                keyboardType="numeric"
            />

            {errorMessage ? (
                <GenericText style={{ color: 'red', marginBottom: 10 }}>
                    {errorMessage}
                </GenericText>
            ) : null}

            <PressableItem
                onPress={handleMissingPIN}
            >
                <GenericText style={TextStyles.MailConfirmationText_3}>
                   ¿Olvidó su PIN?
                </GenericText>
            </PressableItem>

            <Container style={ContainerStyle.MailConfirmationButtonTextContainerStyle}>
                <Button
                    text='Iniciar sesión'
                    containerStyle={ContainerStyle.MailConfirmationButtonTextContainerStyle}
                    textStyle={TextStyles.NewAccountScreenButtonText}
                    gradientStyle={ButtonStyles.gradient}
                    onPress={handleLogin}
                />
            </Container>

            <GenericText style={TextStyles.NewAccountText_4}>o inicia sesión con</GenericText>

            <Container style={ContainerStyle.LoginIconsContainerStyle}>
                <PressableItem onPress={handleLoginWithGoogle}>
                    <ImageContainer source={IMAGES.GOOGLE_LOGO} style={ImageStyles.NewAccountIcons} />
                </PressableItem>
                <PressableItem onPress={handleLoginWithFacebook}>
                    <ImageContainer source={IMAGES.FACEBOOK_LOGO} style={ImageStyles.NewAccountIcons} />
                </PressableItem>
            </Container>
        </Container>
    );
}
