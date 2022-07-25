import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Address from '../components/home/Address';
import Category from '../components/home/Category';
import DeliveryOption from '../components/home/DeliveryOption';
import DiscountsAvailable from '../components/home/DiscountsAvailable';
import FreeDelivery from '../components/home/FreeDelivery';
import Header from '../components/home/Header';
import MapButton from '../components/home/MapButton';
import RestaurantNearYou from '../components/home/RestaurantNearYou';

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
                <FreeDelivery />
                <DiscountsAvailable />
                <RestaurantNearYou />
            </ScrollView>
            <MapButton />
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