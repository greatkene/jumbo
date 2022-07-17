import React from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet
 } from 'react-native'

import { FONTS, SIZES, COLORS } from "../config"


function FormInput({
    containerStyle,
    label,
    placeholder,
    inputStyle,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize= "none",
    errorMsg = ""
}) {
    return (
        <View style={styles.container}>
            {/* Label and Error */}
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between'
            }}>
                <Text style={{color:COLORS.gray, ...FONTS.body4}}>{label}</Text>
                <Text style={{color:COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>
            </View>

            {/* Text Input */}
            <View style={styles.textInput1}>

                <TextInput 
                    style={{
                        flex:1,
                        ...FONTS.body3,
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCompleteType={autoCompleteType}
                    onChangeText={(text) => onChange(text)}
                />

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput1: {
        borderWidth: 1,
        backgroundColor: COLORS.lightgray,
        marginHorizontal: -5,
        borderRadius: 12,
        marginBottom: 20,
        height: 60,
        paddingLeft: 30,
    },
    textInput2: {
        borderWidth: 1,
        borderRadius: 12,
        marginHorizontal: 20,
        borderColor: COLORS.gray,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center'
    }
})

export default FormInput;