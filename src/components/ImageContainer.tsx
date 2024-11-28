import React from 'react';
import { Image, ImageErrorEventData, ImageProgressEventDataIOS, ImageSourcePropType, ImageStyle, NativeSyntheticEvent, StyleProp } from 'react-native';

type ImageContainerProps = {
    source: ImageSourcePropType;
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
    style?: StyleProp<ImageStyle>;
    blurRadius?: number;
    onLoad?: () => void;
    onError?: (error: NativeSyntheticEvent<ImageErrorEventData>) => void;
    onLoadStart? : () => void;
    onLoadEnd?: () => void;
    onProgress?: (event: NativeSyntheticEvent<ImageProgressEventDataIOS>) => void;
    fadeDuration?: number;
    capInsets?: { top: number; left: number; bottom: number; right: number };
    tintColor?: string;
};

const ImageContainer: React.FC<ImageContainerProps> = ({
    source,
    resizeMode = 'contain',
    style,
    blurRadius,
    onLoad,
    onError,
    onLoadStart,
    onLoadEnd,
    onProgress,
    fadeDuration,
    capInsets,
    tintColor,
}) => {
    return (
        <Image
            source={source}
            resizeMode={resizeMode}
            style={style}
            blurRadius={blurRadius}
            onLoad={onLoad}
            onError={onError}
            onLoadStart={onLoadStart}
            onLoadEnd={onLoadEnd}
            onProgress={onProgress}
            fadeDuration={fadeDuration}
            capInsets={capInsets}
            tintColor={tintColor}
        />
    );
};

export default ImageContainer;
