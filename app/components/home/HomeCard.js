import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';

import { COLORS, FONTS, SIZES, dummyData } from '../../config';

function HomeCard({
    onPressHomeCard,
    restaurantName,
    discountPercent,
    averageReview,
    images,
    screenWidth,
    deliveryTime
}) {
    return (
       <TouchableOpacity>
           <View style={{...styles.cardView, width: screenWidth}}>
                <Image 
                    style={{...styles.image, width: screenWidth}}
                    source={images}
                />
           </View>
           <View style={styles.cardInfo}>
               <View>
                    <Text style={styles.restaurantName}>{restaurantName}</Text>
               </View>
               <View style={styles.review}>
                    <Icon
                        type='material-community'
                        name='star'
                        size={24}
                    />
                    <Text style={{...FONTS.h5}}>{averageReview}</Text>
               </View>
           </View>

        {/* Time */}
        <View style={styles.deliveryTime}>
            <Text style={{...FONTS.body4}}>{deliveryTime}</Text>
        </View>

       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    cardView: {
        marginHorizontal: SIZES.padding,
        borderRadius: SIZES.radius,
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    image: {
        height: 150,
        borderTopLeftRadius: SIZES.radius,
        borderTopRightRadius: SIZES.radius 
    },
    restaurantName: {
        ...FONTS.h4,
        marginTop:5,
        color: COLORS.black
    },
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    review: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deliveryTime: {
        position: 'absolute',
        top: 0,
        right: 10,
        backgroundColor: COLORS.white,
        padding: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius
    }
})

export default HomeCard;