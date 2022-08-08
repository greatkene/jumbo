import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import SearchResultCard from '../components/search/SearchResultCard';

const SCREEN_WIDTH = Dimensions.get('window').width;


function SearchResultScreen({navigation, route}) {
    return (
        <View style={styles.container}>
            <View>
                <Text> Search Result For {route.params.item} </Text>   
                
             </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20
    },

    listHeader:{color :colors.grey1,
        fontSize:20,
        paddingHorizontal:10,
        paddingVertical:10,
        fontWeight:"bold"
    }   
})

export default SearchResultScreen;