import React from 'react';
import { TextInput, StyleProp, TextStyle, TextInputProps as RNTextInputProps } from 'react-native';

interface GenericTextInputProps extends RNTextInputProps {
    style?: StyleProp<TextStyle>;
}

const GenericTextInput: React.FC<GenericTextInputProps> = ({
    value,
    placeholder,
    placeholderTextColor = '#000',
    autoCapitalize = 'sentences',
    autoComplete = 'off',
    autoCorrect = true,
    autoFocus = false,
    editable = true,
    keyboardType = 'default',
    maxLength,
    multiline = false,
    numberOfLines = 1,
    secureTextEntry = false,
    onChangeText,
    onBlur,
    onFocus,
    onEndEditing,
    onSubmitEditing,
    onKeyPress,
    returnKeyType = 'done',
    textAlign = 'left',
    selectionColor,
    style,
    blurOnSubmit = true,
    caretHidden = false,
    clearButtonMode = 'never',
    clearTextOnFocus = false,
    contextMenuHidden = false,
    inlineImageLeft,
    inlineImagePadding,
    selection,
    selectTextOnFocus = false,
    textContentType = 'none',
    underlineColorAndroid = 'transparent',
}) => {
  return (
    <TextInput
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        autoComplete={autoComplete}
        autoCorrect={autoCorrect}
        autoFocus={autoFocus}
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        onBlur={onBlur}
        onFocus={onFocus}
        onEndEditing={onEndEditing}
        onSubmitEditing={onSubmitEditing}
        onKeyPress={onKeyPress}
        returnKeyType={returnKeyType}
        textAlign={textAlign}
        selectionColor={selectionColor}
        style={style}
        blurOnSubmit={blurOnSubmit}
        caretHidden={caretHidden}
        clearButtonMode={clearButtonMode}
        clearTextOnFocus={clearTextOnFocus}
        contextMenuHidden={contextMenuHidden}
        inlineImageLeft={inlineImageLeft}
        inlineImagePadding={inlineImagePadding}
        selection={selection}
        selectTextOnFocus={selectTextOnFocus}
        textContentType={textContentType}
        underlineColorAndroid={underlineColorAndroid}
    />
  );
};

export default GenericTextInput;
