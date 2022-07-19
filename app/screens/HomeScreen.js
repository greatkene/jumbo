import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import DeliveryOption from '../components/home/DeliveryOption';
import Header from '../components/home/Header';

function HomeScreen(props) {
    return (
        <View style={styles.container}>
            <Header />
            <DeliveryOption />
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