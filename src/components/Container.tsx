import React from 'react';
import { ColorValue, DimensionValue, StyleProp, View, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

type ContainerProps = {
  children: React.ReactNode;
  flex?: number;
  direction?: 'row' | 'column';
  width?: number | DimensionValue;
  height?: number | DimensionValue;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  padding?: number | DimensionValue;
  margin?: number | DimensionValue;
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  fontSize?: number;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  style?: StyleProp<ViewStyle>;
  horizontal?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  endFillColor?: ColorValue;
  scrollEnabled?: boolean;
  pagingEnabled?: boolean;
  snapToInterval?: number;
  bounces?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  flex,
  direction,
  justifyContent,
  alignItems,
  padding = 0,
  width,
  height,
  backgroundColor,
  borderWidth,
  borderColor,
  margin,
  style,
  scrollEnabled = false,
  horizontal,
  contentContainerStyle,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  endFillColor,
  pagingEnabled,
  snapToInterval,
  bounces,
}) => {
  if (!scrollEnabled) {
    return (
      <View
        style={[
          {
            flex,
            flexDirection: direction,
            justifyContent,
            alignItems,
            padding,
            width,
            height,
            backgroundColor,
            borderWidth,
            borderColor,
            margin,
          },
          style,
        ]}
      >
        {children}
      </View>
    );
  } else {
    return (
      <ScrollView
        style={style}
        contentContainerStyle={[
          {
            flexDirection: direction,
            justifyContent,
            alignItems,
            padding,
            width,
            height,
            backgroundColor,
            borderWidth,
            borderColor,
            margin,
          },
          contentContainerStyle,
        ]}
        horizontal={horizontal}
        showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        endFillColor={endFillColor}
        pagingEnabled={pagingEnabled}
        snapToInterval={snapToInterval}
        bounces={bounces}
      >
        {children}
      </ScrollView>
    );
  }
};

export default Container;
