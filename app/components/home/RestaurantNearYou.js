import React from 'react';
import { View , FlatList, Dimensions, Text, TouchableOpacity} from 'react-native'
import { COLORS, FONTS, SIZES, dummyData } from '../../config';
import HomeCard from './HomeCard';

const SCREEN_WIDTH = Dimensions.get('window').width


function RestaurantNearYou() {
    const freeDelivery = dummyData.freeDelivery;
    return (
        <View>
            <View 
                style={{
                    paddingHorizontal: SIZES.padding,
                    paddingTop: 50
                }}>
                <Text style={{...FONTS.h2}}>All Restaurants</Text>
            </View>

            <View style={{width: SCREEN_WIDTH, paddingTop:10}}>
                {
                    freeDelivery.map(item => {
                        return (
                            <View key={item.id} style={{paddingBottom: 20, paddingHorizontal: SIZES.padding}}>
                            <HomeCard 
                                screenWidth= {SCREEN_WIDTH * 0.886}
                                images={item.image}
                                restaurantName={item.restaurantName}
                                averageReview={item.averageReview}
                                deliveryTime={item.deliveryTime}
                                deliveryPrice={item.deliveryPrice}
                                
                            />
                        </View>
                        )
                    })
                }
            </View>
           
        </View>
    );
}

export default RestaurantNearYou;