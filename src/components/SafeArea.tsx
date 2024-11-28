import React, { Children } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type SafeAreaProps = {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    edges?: Array<'top' | 'bottom' | 'left' | 'right'>;
    mode?: 'padding' | 'margin';
};

const SafeArea: React.FC<SafeAreaProps> = ({
    children,
    style,
    edges = ['top', 'bottom', 'left', 'right'],
    mode = 'padding',
}) => {
    return (
        <SafeAreaView style={style} edges={edges} mode={mode}>
            {children}
        </SafeAreaView>
    );
};

export default SafeArea;