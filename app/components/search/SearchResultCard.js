import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
import { COLORS, FONTS, SIZES } from '../../config'

const SearchResultCard = ({
    OnPressRestaurantCard,
    restaurantName,
    deliveryAvailabe,
    discountAvailable ,
    discountPercent ,
    numberOfReview ,
    businessAddress ,
    farAway ,
    averageReview ,
    images,
    productData
}) => {
  return (
    <View>
      <TouchableOpacity>
        <View style={styles.view1}>
            <View style={{height: 150}}>
                <ImageBackground 
                    style = {{height: 160}}
                    source= {{uri: images}}
                    imageStyle = {styles.imageStyle}
                />
                <View style ={styles.image}>                
                    <Text style ={styles.text1}>{averageReview}</Text>
                    <Text style ={styles.text2}> {numberOfReview} reviews</Text>
                </View>
            </View>

            <View style={styles.view3}>
                <View style={{paddingTop}}>
                    <Text style={{...FONTS.body3}}>{restaurantName}</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row'}}>
                <View style={styles.view4}>
                    <Icon 
                        name='place'
                        type='material'
                        color={COLORS.primary}
                        size = {18}
                        iconStyle = {{marginTop: 3, marginLeft: -3}}
                    />
                </View>
            </View>

        </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchResultCard

const styles = StyleSheet.create({
    view1 : {
        marginHorizontal:9,
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
    },
    image : {
        position:"absolute",
        top:0,
        right:0,
        backgroundColor:'rgba(52, 52, 52,0.4)',
        padding:2,
        alignItems:"center",
        justifyContent:"center", 
        borderTopRightRadius:5,
        borderBottomLeftRadius:12
    },
    imageStyle : {
        borderTopLeftRadius: SIZES.radius,
        borderTopRightRadius: SIZES.radius
    },
    text1 : {
        color: COLORS.white,
        ...FONTS.h3,
        marginTop: -3
    },
    text2 : {
        color: COLORS.white,
        ...FONTS.body4,
        marginRight:0,
        marginLeft:0
    },
    view2 : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: -5
    },
    view3 : {
        flexDirection: 'column',
        marginHorizontal: 5,
        marginBottom: 10,
        marginLeft: 0,
        marginTop: 5
    },
    view4 : {
        flex: 4,
        flexDirection: 'row',
        borderRightWidth: 1,
        borderRightColor: COLORS.darkGray,
        paddingHorizontal: 5
    },
    view5 : {
        ...FONTS.body3
    }
})