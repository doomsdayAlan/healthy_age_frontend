import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useNavigationContext } from '../context/NavigationContext';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/RootStackParamList';
import PressableItem from './PressableItem';
import ImageContainer from './ImageContainer';
import { IMAGES } from '../constants/constants';
import { ImageStyles } from '../styles/ImageContainerStyle';
import { StyleProp, ViewStyle } from 'react-native';

type NavigationProp = StackNavigationProp<RootStackParamList>;

type BackArrowProps = {
  style?:  StyleProp<ViewStyle>;
}

const BackButton: React.FC<BackArrowProps> = ({
  style
}) => {
  const navigation = useNavigation<NavigationProp>();
  const { previousRoute } = useNavigationContext();

  const handleBackPress = () => {
    if (previousRoute) {
      navigation.navigate(previousRoute);
    } else {
      navigation.goBack();
    }
  };

  return (
    <PressableItem
        onPress={handleBackPress}
        style={style}
    >
        <ImageContainer source={IMAGES.BACK_ARROW} style={ImageStyles.BackArrow}/>
    </PressableItem>
  );
};

export default BackButton;
