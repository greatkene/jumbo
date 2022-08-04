import React from 'react';
import { View } from 'react-native'
import CategoryCards from '../components/search/CategoryCards';
import SearchComponent from '../components/search/SearchComponent';

function SearchScreen(props) {
    return (
        <View style={{ backgroundColor: '#fff', flex:1,marginBottom:10,paddingTop:20}}>
            <SearchComponent />
            <CategoryCards />
        </View>
    );
}

export default SearchScreen;