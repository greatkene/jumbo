import React from 'react';
import { View } from 'react-native'
import SearchComponent from '../components/search/SearchComponent';

function SearchScreen(props) {
    return (
        <View style={{ backgroundColor: '#fff'}}>
            <SearchComponent />
        </View>
    );
}

export default SearchScreen;