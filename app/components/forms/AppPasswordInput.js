import React from 'react';
import { 
    View,
    Text,
    TextInput,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Image
 } from 'react-native'
 import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { FONTS, SIZES, COLORS, icons } from "../../config"


function AppPasswordInput({
    placeholder,
    onChange,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize= "none",
    errorMsg = "",
}) {

    const [visible, setVisible] = React.useState(false)

    return (
        <View style={[styles.container, styles.textInput1]}>
            {/* Text Input */}
                <TextInput 
                    style={{
                        ...FONTS.body3,
                    }}
                    placeholder={placeholder}
                    placeholderTextColor={COLORS.gray}
                    secureTextEntry={secureTextEntry}
                />
                <TouchableOpacity onPress={() => setVisible(!visible)}>
                    <MaterialCommunityIcons name='eye-off-outline' size={25} />
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // margin:10
    },
    textInput1: {
        borderWidth: 1,
        // marginHorizontal: -5,
        borderRadius: 12,
        marginBottom: 20,
        borderColor: COLORS.gray,
        paddingLeft: 30,
        paddingRight: 20,
        // padding: 20,
        height: 50,
    },
    
})

export default AppPasswordInput;