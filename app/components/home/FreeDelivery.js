import React from 'react';
import { View , FlatList, Dimensions, Text, TouchableOpacity} from 'react-native'
import { COLORS, FONTS, SIZES, dummyData } from '../../config';
import HomeCard from './HomeCard';

const SCREEN_WIDTH = Dimensions.get('window').width


function FreeDelivery() {
    return (
        <View>
            <View 
                style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding
                }}>
                <Text style={{...FONTS.h3}}>Free Deliveries</Text>
                <TouchableOpacity>
                    <Text style={{...FONTS.h3, color: COLORS.primary}}>See All</Text>
                </TouchableOpacity>
            </View>
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
                                screenWidth= {SCREEN_WIDTH * 0.5}
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

export default FreeDelivery;