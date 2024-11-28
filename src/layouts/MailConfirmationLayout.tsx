import * as React from 'react';
import { useState } from 'react';
import Container from '../components/Container';
import GenericText from '../components/Text';
import BackButton from '../components/BackArrow';
import { ButtonStyles } from '../styles/ButtonsStyles';
import { ContainerStyle } from '../styles/ContainerStyle';
import { TextStyles } from '../styles/TextStyles';
import GenericInput from '../components/Input';
import PressableItem from '../components/PressableItem';
import Button from '../components/Button';
import { Alert } from 'react-native';
import { AuthStackParamList } from '../routes/AuthStackParamList';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';

type EmailConfirmationNavigationProp = StackNavigationProp<AuthStackParamList, 'LoginScreen'>;

export default function MailConfirmationScreenLayout() {
    const navigation = useNavigation<EmailConfirmationNavigationProp>();

    const [confirmationCode, setConfirmationCode] = useState('');
    const [isResent, setIsResent] = useState(false);

    const isValidCode = () => {
        const codeRegex = /^\d{6}$/;
        return codeRegex.test(confirmationCode);
    };

    const handleConfirmation = () => {
        if (isValidCode()) {
            navigation.navigate('LoginScreen');
        } else {
            Alert.alert("Por favor, ingrese un código de 6 dígitos válido.");
        }
    };

    const handleResendCode = () => {
        setIsResent(true);
        Alert.alert("El código ha sido reenviado.");
    };

    return (
        <Container style={ContainerStyle.MailConfirmationMainContainer}>
            <Container style={ContainerStyle.MailConfirmationArrowContainer}>
                <BackButton style={ButtonStyles.ArrowBackButtonMC} />
                <GenericText style={TextStyles.MailConfirmationText_1} numberOfLines={2}>
                    Confirmación {"\n"} de correo
                </GenericText>
            </Container>

            <GenericText style={TextStyles.MailConfirmationText_2} numberOfLines={2}>
                Ingrese el código enviado al correo electrónico
            </GenericText>

            <GenericInput
                placeholder='123456'
                containerStyle={ContainerStyle.MailConfirmationInputContainerStyle}
                value={confirmationCode}
                onChangeText={setConfirmationCode}
                keyboardType="numeric"
                maxLength={6}
            />

            <PressableItem onPress={handleResendCode}>
                <GenericText style={TextStyles.MailConfirmationText_3}>
                    Reenviar código
                </GenericText>
            </PressableItem>

            <Container style={ContainerStyle.MailConfirmationButtonTextContainerStyle}>
                <Button
                    text='Confirmar'
                    containerStyle={ContainerStyle.MailConfirmationButtonTextContainerStyle}
                    textStyle={TextStyles.NewAccountScreenButtonText}
                    gradientStyle={ButtonStyles.gradient}
                    onPress={handleConfirmation}
                />
            </Container>
        </Container>
    );
}
