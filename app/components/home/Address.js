import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements'
import { COLORS, FONTS, SIZES } from '../../config';


function Address(props) {
    return (
        <View style={styles.container}>
            <View style={styles.addressContainer}>
                <Icon 
                    type='material-community'
                    name='map-marker'
                    color={COLORS.primary}
                    size={26}
                />
                <Text style={{marginLeft: 5, marginTop: 2, ...FONTS.h3}}>7 Ogoglogona Street</Text>
            </View>
            <View style={styles.iconContainer}>
                <Icon 
                    type='material-community'
                    name='tune'
                    color={COLORS.primary}
                    size={26}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    addressContainer: {
        flexDirection: 'row',
        paddingVertical: 15
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25
    },
    iconContainer: {
        paddingVertical: 15
    }
})

export default Address;