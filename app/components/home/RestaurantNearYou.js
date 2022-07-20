import React from 'react';
import { View , FlatList, Dimensions, Text} from 'react-native'
import { COLORS, FONTS, SIZES, dummyData } from '../../config';
import HomeCard from './HomeCard';

const SCREEN_WIDTH = Dimensions.get('window').width

function RestaurantNearYou() {
    console.log()
    return (
        <View>
            <FlatList 
                contentContainerStyle={{paddingHorizontal: SIZES.padding }}
                horizontal={true}
                data = {dummyData.freeDelivery}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem= {({item}) => {
                    return(
                        <View>
                            <HomeCard 
                                screenWidth= {SCREEN_WIDTH * 0.7}
                                images={item.image}
                                restaurantName={item.restaurantName}
                                averageReview={item.averageReview}
                                deliveryTime={item.deliveryTime}
                                deliveryPrice={item.deliveryPrice}
                            />
                        </View>
                    )
                }}
            />
        </View>
    );
}

export default RestaurantNearYou;