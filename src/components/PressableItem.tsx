import React from 'react';
import { GestureResponderEvent, Insets, Pressable, StyleProp, ViewStyle } from 'react-native';

type PressableItemProps = {
  children: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  onPressOut?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
  hitSlop?: number | Insets;
  disabled?: boolean;
  testID?: string;
  style?: StyleProp<ViewStyle>;
};

const PressableItem: React.FC<PressableItemProps> = ({
  children,
  onPress,
  onPressIn,
  onPressOut,
  onLongPress,
  hitSlop,
  disabled,
  testID,
  style,
}) => {
  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      onLongPress={onLongPress}
      hitSlop={hitSlop}
      disabled={disabled}
      testID={testID}
      style={style}
    >
      {children}
    </Pressable>
  );
};

export default PressableItem;
