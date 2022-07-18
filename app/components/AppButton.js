import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { FONTS, SIZES, COLORS, icons } from "../config"


function AppButton({title, onPress, style, color="white"}) {
    return (
        <TouchableOpacity style={[styles.button, style]}  onPress={onPress}>
            <Text style={[styles.text, {color: COLORS[color]}]}> {title} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        width: '100%',
        padding: 15,
        marginVertical: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: COLORS.white,
        ...FONTS.body3
    }
})

export default AppButton;


