import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// Context
import { useGlobalContext } from '../../context';
import { COLORS, FONTS, SIZES } from '../../config';

function DeliveryOption(props) {
     const { delivery, setDelivery } = useGlobalContext()
    return (
        <View style={styles.deliveryContainer}>
            <TouchableOpacity
                onPress={() => {
                    setDelivery(true)
                }}
            >
                <View style={{...styles.btnContainer,backgroundColor: delivery ? COLORS.primary : COLORS.gray3}}>
                    <Text style={{
                            ...styles.deliveryText, 
                            color: delivery ? COLORS.white : COLORS.primary
                    }}>DELIVERY</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    setDelivery(false)
                }}
            >
                <View 
                    style={{
                        ...styles.btnContainer,
                        backgroundColor: delivery ? COLORS.gray3 : COLORS.primary,
                    }}
                >
                    <Text 
                        style={{
                            ...styles.deliveryText, 
                            color: delivery ? COLORS.primary : COLORS.white
                    }}>PICKUP</Text>
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
        justifyContent: 'space-evenly'
    },
    btnContainerTrue:{
        borderWidth:2,
        backgroundColor: COLORS.white,
        borderColor: COLORS.primary
    },
    deliveryContainer: {
        flexDirection: 'row',
        paddingHorizontal: 50,
        justifyContent: 'space-between',
        backgroundColor: COLORS.white
    },
    deliveryText: {
        color: COLORS.white,
        ...FONTS.body4
    },
})
export default DeliveryOption;