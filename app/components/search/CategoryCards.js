import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native'

import {COLORS, dummyData, FONTS, SIZES} from '../../config'

const SCREEN_WIDTH = Dimensions.get('window').width;



function CategoryCards(props) {
    const filterData2 = dummyData.filterData2

    return (
        <View>
            <FlatList 
                style={{marginBottom: 1}}
                data = {filterData2}
                keyExtractor = {item => item.id}
                renderItem = {({item, index}) => {
                    return (
                        <TouchableWithoutFeedback>
                        <View style= {styles.imageView}>
                            <ImageBackground 
                                
                                style = {styles.image}
                                source = {{uri: item.image}}
                            >
                                <View style={styles.textView}>
                                    <Text style={{color: COLORS.white, ...FONTS.h2}}> {item.name} </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    )
                }}
                horizontal = {false}
                showsVerticalScrollIndicator = {false}
                numColumns = {2}
                ListHeaderComponent = { <Text style={styles.listHeader}>Top Categories</Text> }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageView :{
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH*0.4475,
        height: SCREEN_WIDTH*0.4475,
        marginLeft: SCREEN_WIDTH*0.035,
        marginBottom: SCREEN_WIDTH*0.035,
        // justifyContent: 'space-between',
    },
    image : {
        height:SCREEN_WIDTH*0.4475,
        width:SCREEN_WIDTH*0.4475,
        borderRadius:10, 
    }, 
    listHeader : {
        fontSize:16,
        color:COLORS.darkGray,
        paddingBottom:10,
        marginLeft:12
    },
    textView: {
        height: SCREEN_WIDTH*0.4475,
        width: SCREEN_WIDTH*0.4475,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'rgba(52, 52, 52,0.5)'
    }
})

export default CategoryCards;