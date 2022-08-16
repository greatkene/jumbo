import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { restaurantData } from '../../config/dummyData'

const RestaurantHeader = ({navigation, id}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.container}
                source={{uri:restaurantData[id].images}}
            >

            </ImageBackground>
        </View>
    )
}

export default RestaurantHeader

const styles = StyleSheet.create({
    container: {
        height: 150
    },
    view1 : {
        flexDirection: 'row',
        alignItems: 'baseline',
        justifyContent: 'space-between'
    },
})