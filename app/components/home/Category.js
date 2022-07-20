import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Pressable, Image } from 'react-native'
import { COLORS, FONTS, SIZES, dummyData } from '../../config';

function Category(props) {
    const [indexCheck, setIndexCheck] = useState("1")
    return (
        <View style={styles.container}>
            {/* <Text style={{...FONTS.h3}}>Categories</Text> */}
            <View>
                <FlatList 
                    data={dummyData.categories}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    extraData={indexCheck}
                    renderItem={({item, index}) => (
                        <Pressable>
                            <View style={indexCheck === item.id ? {...styles.categoryContainer} : {...styles.categoryContainerSelected}}>
                                <View style={styles.categoryDetails}>        
                                    <Image style={{width:50, height: 50, marginTop:5}} source={item.icon} />
                                    <Text style={{color:COLORS.white, ...FONTS.h4}}>{item.name}</Text>
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
        width: 140,
        height: 55,
        marginHorizontal: 5,
        marginVertical: 10
    },
    categoryContainerSelected: {
        backgroundColor: COLORS.gray3,
        borderRadius: SIZES.radius,
        justifyContent: 'center',
        alignItems: 'center',
        width: 140,
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
        paddingLeft: SIZES.padding,
        paddingVertical: SIZES.padding
    }
})
export default Category;