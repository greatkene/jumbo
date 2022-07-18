import React from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView
 } from 'react-native'

import { FONTS, SIZES, COLORS } from "../../config"


function AppTextInput({
    placeholder,
    onChange,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize= "none",
    errorMsg = "",
    
}) {
    return (
        <View style={styles.container}>
            {/* Label and Error */}
            <View style={{
                flexDirection: "row",
                justifyContent: 'space-between'
            }}>
                <Text style={{color:COLORS.red, ...FONTS.body4}}>{errorMsg}</Text>
            </View>

            {/* Text Input */}
         
                <TextInput 
                    style={styles.textInput1}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoCompleteType={autoCompleteType}
                    onChangeText={(text) => onChange(text)}
                />
           

        </View>
    );
}

const styles = StyleSheet.create({
    textInput1: {
        borderWidth: 1,
        // marginHorizontal: -5,
        borderRadius: 12,
        marginBottom: 20,
        borderColor: COLORS.gray,
        height: 50,
        paddingLeft: 30,
        ...FONTS.body3,
    },
    
})

export default AppTextInput;