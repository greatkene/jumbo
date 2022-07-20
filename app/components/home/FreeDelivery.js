import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { COLORS, FONTS, SIZES, dummyData } from '../../config';


function FreeDelivery(props) {
    return (
        <View style={styles.container}>
            <View style={styles.freeDeliveryHeader}>
                <Text style={{...FONTS.h3}}>Free Deliveries</Text> 
                <TouchableOpacity>
                    <Text style={{...FONTS.h3, color: COLORS.primary}}>See All</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    freeDeliveryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: SIZES.padding
    }
})

export default FreeDelivery;