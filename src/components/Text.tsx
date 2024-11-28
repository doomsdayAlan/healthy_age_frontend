import React from 'react';
import { Text, StyleProp, TextStyle, NativeSyntheticEvent, TextLayoutEventData } from 'react-native';

type GenericTextProps = {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    onPress?: () => void;
    numberOfLines?: number;
    ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
    selectable?: boolean;
    selectionColor?: string;
    onLongPress?: () => void;
    adjustsFontSizeToFit?: boolean;
    minimumFontScale?: number;
    suppressHighlighting?: boolean;
    maxFontSizeMultiplier?: number | null;
    accessible?: boolean;
    accessibilityHint?: string;
    accessibilityLabel?: string;
    accessibilityRole?: 'button' | 'header' | 'link' | 'text' | 'none';
    onTextLayout?: (event: NativeSyntheticEvent<TextLayoutEventData>) => void;
};

const GenericText: React.FC<GenericTextProps> = ({
    children,
    style,
    onPress,
    numberOfLines,
    ellipsizeMode = 'tail',
    selectable = false,
    selectionColor,
    onLongPress,
    adjustsFontSizeToFit,
    minimumFontScale,
    suppressHighlighting = false,
    maxFontSizeMultiplier,
    accessible = true,
    accessibilityHint,
    accessibilityLabel,
    accessibilityRole = 'text',
    onTextLayout,
}) => {
    return (
        <Text
            style={style}
            onPress={onPress}
            numberOfLines={numberOfLines}
            ellipsizeMode={ellipsizeMode}
            selectable={selectable}
            selectionColor={selectionColor}
            onLongPress={onLongPress}
            adjustsFontSizeToFit={adjustsFontSizeToFit}
            minimumFontScale={minimumFontScale}
            suppressHighlighting={suppressHighlighting}
            maxFontSizeMultiplier={maxFontSizeMultiplier}
            accessible={accessible}
            accessibilityHint={accessibilityHint}
            accessibilityLabel={accessibilityLabel}
            accessibilityRole={accessibilityRole}
            onTextLayout={onTextLayout}
        >
            {children}
        </Text>
    );
};

export default GenericText;
