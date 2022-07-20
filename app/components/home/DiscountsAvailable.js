import React from 'react';
import { View , FlatList, Dimensions, Text, TouchableOpacity} from 'react-native'
import { COLORS, FONTS, SIZES, dummyData } from '../../config';
import HomeCard from './HomeCard';

const SCREEN_WIDTH = Dimensions.get('window').width


function DiscountsAvailable() {
    return (
        <View>
            <View 
                style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding,
                    paddingTop: 50
                }}>
                <Text style={{...FONTS.h4}}>Discounts Available</Text>
                <TouchableOpacity>
                    <Text style={{...FONTS.h4, color: COLORS.primary}}>See All</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                horizontal={true}
                contentContainerStyle={{paddingHorizontal:20,}}
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

export default DiscountsAvailable;