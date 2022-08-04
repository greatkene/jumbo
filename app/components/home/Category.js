import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, Image } from 'react-native'
import { COLORS, FONTS, SIZES, dummyData } from '../../config';
import { useNavigation } from '@react-navigation/native';


function Category(props) {
    const [indexCheck, setIndexCheck] = useState("1")
    const filterData = dummyData.filterData
    const navigation = useNavigation();


    return (
        <View style={styles.container}>
            <View 
                style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    paddingHorizontal: SIZES.padding
                }}>
                <Text style={{...FONTS.h3}}>Top Categories</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SearchScreen")}>
                    <Text style={{...FONTS.h3, color: COLORS.primary}}>See All</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList 
                    contentContainerStyle={{paddingLeft: SIZES.padding}}
                    data={filterData.slice(0,3)}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    extraData={indexCheck}
                    renderItem={({item, index}) => (
                        <Pressable 
                            onPress={() => { setIndexCheck(item.id )}}
                        >
                            <View style={indexCheck === item.id ? {...styles.categoryContainer} : {...styles.categoryContainerSelected}}>
                                <View style={styles.categoryDetails}>        
                                    <Image style={{width:50, height: 50, marginTop:5}} source={item.image} />
                                    <Text style={indexCheck === item.id ? {color:COLORS.white, ...FONTS.h4} : {color:COLORS.black, ...FONTS.h4}}>{item.name}</Text>
                                </View>
                            </View>
                        </Pressable>
                    )}
                />
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    categoryContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 55,
        marginHorizontal: 3,
        marginVertical: 10,
    },
    categoryContainerSelected: {
        backgroundColor: COLORS.gray3,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        width: 160,
        height: 55,
        marginHorizontal: 5,
        marginVertical: 10,
        
    },
    categoryDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center', 
    },
    container: { 
        paddingVertical: SIZES.padding
    }
})
export default Category;