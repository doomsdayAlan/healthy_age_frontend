import * as React from 'react';
import { useEffect } from 'react';
import Container from '../components/Container';
import GenericText from '../components/Text';
import { TextStyles } from '../styles/TextStyles';
import ImageContainer from '../components/ImageContainer';
import { IMAGES } from '../constants/constants';
import { ImageStyles } from '../styles/ImageContainerStyle';
import PressableItem from '../components/PressableItem';
import Button from '../components/Button';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthStackParamList } from '../routes/AuthStackParamList';
import { ContainerStyle } from '../styles/ContainerStyle';
import { ButtonStyles } from '../styles/ButtonsStyles';
import { AppStackParamList } from '../routes/AppStackParamList';

type WelcomeScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<AuthStackParamList, 'WelcomeScreen'>,
    StackNavigationProp<AppStackParamList, 'MainPageScreen'>
>;

interface WelcomeScreenLayoutProps {
    AccountConnected: boolean;
}

const WelcomeScreenLayout: React.FC<WelcomeScreenLayoutProps> = ({ AccountConnected }) => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();

    useEffect(() => {
        if (AccountConnected) {
            navigation.navigate('MainPageScreen');
        }
    }, [AccountConnected, navigation]);

    const handleNavigateToNewAccount = () => {
        navigation.navigate('NewAccountScreen');
    };

    const handleNavigateToLogin = () => {
        navigation.navigate('LoginScreen');
    };

    return (
        <Container style={ContainerStyle.WelcomePageScreenLayoutStyle}>
            {AccountConnected ? null : (
                <Container style={ContainerStyle.WelcomePageScreenLayoutStyleContainer_1}>
                    <GenericText style={TextStyles.WelcomeScreenText_1} numberOfLines={2}>
                        Bienvenido a HealthyAge
                    </GenericText>

                    <GenericText style={TextStyles.WelcomeScreenText_2} numberOfLines={2}>
                        Vigilancia constante, cariño permanente.
                    </GenericText>

                    <ImageContainer 
                        source={IMAGES.WELCOME_IMAGE}
                        style={ImageStyles.WelcomeImage}
                    />

                    <Button
                        text='Comenzar'
                        onPress={handleNavigateToNewAccount}
                        containerStyle={ContainerStyle.WelcomePageButtonContainerStyle}
                        gradientStyle={ButtonStyles.gradient}
                        textStyle={TextStyles.WelcomeScreenButtonText}
                    />

                    <GenericText style={TextStyles.WelcomeScreenText_2} numberOfLines={2}>
                        ¿Ya tienes una cuenta?
                    </GenericText>

                    <PressableItem onPress={handleNavigateToLogin}>
                        <GenericText style={TextStyles.WelcomeScreenText_3} numberOfLines={2}>
                            Iniciar sesión
                        </GenericText>
                    </PressableItem>
                </Container>
            )}
        </Container>
    );
};

export default WelcomeScreenLayout;
