import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {Icon} from 'react-native-elements'
import { COLORS, FONTS, SIZES } from '../../config';

function DeliveryOption(props) {
    const [delivery, setDelivery] = useState(true)

    return (
        <View style={styles.deliveryContainer}>
            <TouchableOpacity>
                <View style={{...styles.btnContainer,backgroundColor: delivery ? COLORS.primary : COLORS.darkGray}}>
                    <Icon name='truck-delivery' type='material-community' color={COLORS.white} style={{paddingRight: -5}} />
                    <Text style={styles.deliveryText}>Delivery</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{...styles.btnContainer,backgroundColor: delivery ? COLORS.primary : COLORS.darkGray}}>
                    <Icon name='map-marker' type='material-community' color={COLORS.white} style={{paddingRight: -5}} />
                    <Text style={styles.deliveryText}>Pickup</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    btnContainer: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: 12,
        borderRadius: 10,
        width: 120,
        alignItems: 'center',
        marginVertical: 15,
        flexDirection: 'row',
    },
    deliveryContainer: {
        flexDirection: 'row',
        paddingHorizontal: 50,
        justifyContent: 'space-between'
    },
    deliveryText: {
        color: COLORS.white,
        ...FONTS.body3
    },
})
export default DeliveryOption;