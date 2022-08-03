import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableWithoutFeedback, ImageBackground } from 'react-native'

import {COLORS, dummyData} from '../../config'


function CategoryCards(props) {
    const filterData = dummyData.filterData

    return (
        <View>
            <FlatList 
                style={{marginBottom: 1}}
                data = {filterData}
                keyExtractor = {item => item.id}
                renderItem = {({item, index}) => (
                    <TouchableWithoutFeedback>
                        <View style= {styles.imageView}>
                            <ImageBackground 
                                
                                style = {styles.image}
                                source = {item.image}
                            >
                                <View style={styles.textView}>
                                    <Text style={{color: COLORS.primary}}> {item.name} </Text>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                )}
                horizontal = {false}
                showsVerticalScrollIndicator = {false}
                numColumns = {3}
                ListHeaderComponent = { <Text style={styles.listHeader}>Top Categories</Text> }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default CategoryCards;