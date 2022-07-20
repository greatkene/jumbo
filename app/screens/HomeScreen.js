import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Address from '../components/home/Address';
import Category from '../components/home/Category';
import DeliveryOption from '../components/home/DeliveryOption';
import Header from '../components/home/Header';

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Header />
            <ScrollView 
                stickyHeaderIndices={[0]}
                showsHorizontalScrollIndicator= {false}
            >
                <DeliveryOption />
                <Address />
                <Category />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default HomeScreen;