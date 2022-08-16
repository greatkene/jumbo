import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableWithoutFeedback, ImageBackground, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import {COLORS, FONTS, SIZES} from '../../config'
import { filterData2 } from '../../config/dummyData';

const SCREEN_WIDTH = Dimensions.get('window').width;



function CategoryCards() {
    
    const navigation = useNavigation();

    return (
        <View style={{marginBottom: 50, marginTop: 10}}>
            <FlatList 
                style={{borderRadius: 20}}
                data = {filterData2}
                keyExtractor = {item => item.id}
                renderItem = {({item, index}) => {
                    return (
                        <TouchableWithoutFeedback
                            onPress ={()=>{
                                navigation.navigate("SearchResultScreen",{item:item.name})
                            }}
                        >
                        <View style= {styles.imageView}>
                            <ImageBackground 
                                
                                style = {styles.image}
                                source = {{uri: item.image}}
                            >
                                <View style={styles.textView}>
                                    <Text style={{color: COLORS.gray3, ...FONTS.h3}}> {item.name} </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                    )
                }}
                horizontal = {false}
                showsVerticalScrollIndicator = {false}
                numColumns = {2}
                ListHeaderComponent = { <Text style={styles.listHeader}>More Categories</Text> }
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
        ...FONTS.h3,
        color:COLORS.darkGray,
        paddingBottom:10,
        marginLeft:12,
        marginVertical: 15
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