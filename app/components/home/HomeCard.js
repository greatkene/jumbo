import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements';

import { COLORS, FONTS, SIZES} from '../../config';

function HomeCard({
    onPressHomeCard,
    restaurantName,
    discountPercent,
    averageReview,
    images,
    screenWidth,
    deliveryTime,
    deliveryPrice,
}) {
    return (
       <TouchableOpacity>
           <View style={{...styles.cardView, width: screenWidth}}>
                <Image 
                    style={{...styles.image, width: screenWidth}}
                    source={images}
                />
           
                <View style={styles.cardInfo}>
                    <View>
                            <Text style={styles.restaurantName}>{restaurantName}</Text>
                    </View>
                    <View style={styles.review}>
                            <Icon
                                type='material-community'
                                name='star'
                                size={20}
                            />
                            <Text style={{...FONTS.h4, marginTop: 5, marginLeft: 4}}>{averageReview}</Text>
                    </View>
                </View>
                <Text style={{...FONTS.h3, textTransform: 'uppercase', marginLeft: 10, marginTop: -10}}>{deliveryPrice}</Text>
           </View>

        {/* Time */}
        <View style={styles.deliveryTime}>
            <Text style={{...FONTS.body5}}>{deliveryTime}</Text>
        </View>

       </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    cardView: {
        borderRadius: SIZES.radius,
        borderColor: COLORS.primary,
        marginTop: SIZES.padding,
        // borderWidth: 1,
        borderColor: COLORS.gray2,
        height: 180,
        marginRight: 25

    },
    image: {
        height: 130,
        borderRadius: SIZES.radius
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
        paddingHorizontal: 10,
        paddingVertical: 6
    },
    review: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    deliveryTime: {
        position: 'absolute',
        top: 35,
        right: 40,
        backgroundColor: COLORS.white,
        padding: 6,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.radius
    }
})

export default HomeCard;