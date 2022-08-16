import React from 'react';
import { View , FlatList, Dimensions, Text, TouchableOpacity} from 'react-native'
import { COLORS, FONTS, SIZES, } from '../../config';
import HomeDiscountCard from './HomeDiscountCard';

import { freeDelivery } from '../../config/dummyData';

const SCREEN_WIDTH = Dimensions.get('window').width


function DiscountsAvailable() {
    return (
        <View>
            <View 
                style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding,
                    paddingTop: 30
                }}>
                <Text style={{...FONTS.h3}}>Discounts Available</Text>
                <TouchableOpacity>
                    <Text style={{...FONTS.h3, color: COLORS.primary}}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                horizontal={true}
                contentContainerStyle={{paddingHorizontal:20,}}
                data = {freeDelivery}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem= {({item}) => {
                    return(
                        <View>
                            <HomeDiscountCard 
                                screenWidth= {SCREEN_WIDTH * 0.5}
                                images={item.image}
                                restaurantName={item.restaurantName}
                                averageReview={item.averageReview}
                                deliveryTime={item.deliveryTime}
                                deliveryPrice={item.deliveryPrice}
                                discountPercent={item.discount}
                            />
                        </View>
                    )
                }}
            />
        </View>
    );
}

export default DiscountsAvailable;