import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function SearchResultScreen({navigation, route}) {
    return (
        <View>
            <Text> Search Result For {route.params.item} </Text>   
        </View>
    );
}

export default SearchResultScreen;