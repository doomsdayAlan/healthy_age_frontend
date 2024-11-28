import * as React from 'react';
import { useState, useContext } from 'react';
import Container from '../components/Container';
import GenericText from '../components/Text';
import { ContainerStyle } from '../styles/ContainerStyle';
import ScreenTitle from '../components/ScreenTitle';
import Separator from '../components/Separator';
import TabMenu from '../components/TabMenu';
import { useUser } from '../context/UserContext';
import ImageContainer from '../components/ImageContainer';
import { IMAGES } from '../constants/constants';
import { ImageStyles } from '../styles/ImageContainerStyle';
import { TextStyles } from '../styles/TextStyles';
import GenericInput from '../components/Input';
import IconTextButton from '../components/IconTextButton';



export default function ProfileLayout(){

    const {user} = useUser();
    const [name, SetName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [phone, SetPhone] = useState('');
    const [email, SetEmail] = useState('');
    const [birthDate, SetBirthDate] = useState('');

    const handleLogOut = () => {

    };

    const handleInfo = () => {

    };

    return (
        <Container
            style = {ContainerStyle.DefaultScreenContainer}
        >
            <ScreenTitle text='Mi Perfil' addButton = {false}/>

            {user? (
                <Container
                    style = {ContainerStyle.ProfileScreenContainer}
                >
                    <ImageContainer 
                        source={user.profileImage ? user.profileImage : IMAGES.DEFAULT_USER_ICON}
                        style={ImageStyles.ProfileScreenIconStyle}
                    />

                    <GenericText
                        style = {TextStyles.ProfileScreenNameStyle}
                    >
                        {user.firstName} {user.lastName}
                    </GenericText>

                    <Container
                        style = {ContainerStyle.ProfileScreenInputsContainer}
                    >

                        <Container style={ContainerStyle.ProfileScreenNamesContainer}>
                            <GenericInput
                                headerText='Nombre'
                                placeholder={user.firstName}
                                containerStyle={[ContainerStyle.ProfileInputContainerStyle, {width: '48%'}]}
                                value={name}
                                onChangeText={SetName}
                                maxLength={16}
                                keyboardType="default"
                            />

                            <GenericInput
                                headerText='Apellido'
                                placeholder={user.lastName}
                                containerStyle={[ContainerStyle.ProfileInputContainerStyle, {width: '48%'}]}
                                value={lastName}
                                onChangeText={SetLastName}
                                maxLength={16}
                                keyboardType="default"
                            />
                        </Container>

                        <GenericInput
                            headerText='Correo Electronico'
                            placeholder={user.email}
                            containerStyle={ContainerStyle.ProfileInputContainerStyle}
                            value={email}
                            onChangeText={SetEmail}
                            maxLength={64}
                            keyboardType="email-address"
                        />

                        <Container style={ContainerStyle.ProfileScreenNamesContainer}>
                            <GenericInput
                                headerText='Telefono'
                                placeholder={user.phoneNumber}
                                containerStyle={[ContainerStyle.ProfileInputContainerStyle, {width: '40%'}]}
                                value={phone}
                                onChangeText={SetPhone}
                                maxLength={10}
                                keyboardType="phone-pad"
                            />

                            <GenericInput
                                headerText='Fecha de nacimiento'
                                placeholder={user.birthDate}
                                containerStyle={[ContainerStyle.ProfileInputContainerStyle, {width: '58%'}]}
                                value={birthDate}
                                onChangeText={SetBirthDate}
                                maxLength={10}
                                keyboardType="default"
                            />
                        </Container>
                        <Separator containerStyle={[ContainerStyle.LineSeparator, {marginTop: '5%', marginBottom: '5%'}]}/>
                        <IconTextButton source={IMAGES.INFO} text={'Politica de privacidad e informacion'}/>
                        <Separator containerStyle={[ContainerStyle.LineSeparator, {marginTop: '5%', marginBottom: '5%'}]}/>
                        <IconTextButton source={IMAGES.LOGOUT} text={'Cerrar sesión'}/>
                    </Container>    
                </Container>
            ) : (
                <Container
                    style={ContainerStyle.MainPageErrorMainContainer}
                >

                    <GenericText
                        style={TextStyles.MainErrorText}
                    >
                        ¡Uy, no deberias estar aqui!
                    </GenericText>

                    <ImageContainer
                        source={IMAGES.ERROR_IMAGE}
                    />
                </Container>
            )}


            <Separator containerStyle={ContainerStyle.TransparentSeparator}/>

            <TabMenu/>
        </Container>
    );
}