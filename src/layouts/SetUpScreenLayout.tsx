import * as React from 'react';
import Container from '../components/Container';
import ImageContainer from '../components/ImageContainer';
import { IMAGES } from '../constants/constants';
import Loader from '../components/Loader';
import { LoaderStyles } from '../styles/LoaderStyle';
import { ImageStyles } from '../styles/ImageContainerStyle';
import GenericText from '../components/Text';
import { TextStyles } from '../styles/TextStyles';
import { ContainerStyle } from '../styles/ContainerStyle';



export default function SetUpScreenLayout() {
    return (
      <Container 
        style={ContainerStyle.SetUpScreenLayoutStyle}
      >
        <ImageContainer
          source={IMAGES.LOGO}
          style={ImageStyles.Logo}
        />
        
        <GenericText 
          style={TextStyles.SetUpScreenText}
          >
            Healty Age
          </GenericText>

        <Loader 
          style={LoaderStyles.SetUpScreenLoader} 
          color='#ff8659' 
          size={75}
        />

      </Container>
    );
  }


