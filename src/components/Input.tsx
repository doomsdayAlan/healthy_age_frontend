import * as React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import Container from './Container';
import GenericText from './Text';
import GenericTextInput from './TextInput';
import { GenericInputStyles } from '../styles/GenericInputStyle';


type GenericInputProps = {
    value?: string;
    headerText?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoComplete?: 'off' | 'name' | 'email' | 'password' | 'username' | 'tel' | 'street-address' | 'postal-code' | 'cc-number' | 'cc-exp' | 'cc-csc' | 'cc-given-name' | 'cc-additional-name' | 'cc-family-name' | 'username-new' | 'one-time-code';
    autoCorrect?: boolean;
    autoFocus?: boolean;
    editable?: boolean;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search';
    maxLength?: number;
    multiline?: boolean;
    numberOfLines?: number;
    secureTextEntry?: boolean;
    onChangeText?: (text: string) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
    onEndEditing?: (e: any) => void;
    onSubmitEditing?: (e: any) => void;
    onKeyPress?: (e: any) => void;
    returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
    textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
    selectionColor?: string;
    style?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    inputContainerStyle?: StyleProp<ViewStyle>;
    blurOnSubmit?: boolean;
    caretHidden?: boolean;
    clearButtonMode?: 'never' | 'while-editing' | 'unless-editing' | 'always';
    clearTextOnFocus?: boolean;
    contextMenuHidden?: boolean;
    inlineImageLeft?: string;
    inlineImagePadding?: number;
    selection?: { start: number; end?: number };
    selectTextOnFocus?: boolean;
    textContentType?:
        | 'none'
        | 'URL'
        | 'addressCity'
        | 'addressCityAndState'
        | 'addressState'
        | 'countryName'
        | 'creditCardNumber'
        | 'emailAddress'
        | 'familyName'
        | 'fullStreetAddress'
        | 'givenName'
        | 'jobTitle'
        | 'location'
        | 'middleName'
        | 'name'
        | 'namePrefix'
        | 'nameSuffix'
        | 'nickname'
        | 'organizationName'
        | 'postalCode'
        | 'streetAddressLine1'
        | 'streetAddressLine2'
        | 'sublocality'
        | 'telephoneNumber'
        | 'username'
        | 'password'
        | 'newPassword'
        | 'oneTimeCode';
    underlineColorAndroid?: string;
};

const GenericInput: React.FC<GenericInputProps> = ({
    value,
    headerText,
    placeholder,
    placeholderTextColor = '#000',
    autoCapitalize = 'sentences',
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
    selectionColor,
    style,
    containerStyle,
    inputContainerStyle,
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
        <Container style={containerStyle}>
            {headerText && (
                <GenericText style={GenericInputStyles.headerText}>
                    {headerText}
                </GenericText>
            )}
            <Container 
                style={[GenericInputStyles.inputContainer, inputContainerStyle]}
            >
                <GenericTextInput
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    autoCapitalize={autoCapitalize}
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
                    selectionColor={selectionColor}
                    style={[GenericInputStyles.inputText, style]}
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
            </Container>
        </Container>
    );
};

export default GenericInput;
