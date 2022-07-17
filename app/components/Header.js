import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

function Header(props) {
    return (
        // App Icon
        <View style={{
            alignItems: 'center',
            paddingVertical:30
        }}>
            <Image 
                source={require("../assets/logo.png")}
                resizeMode="cover"
                style={{
                    height: 100,
                    width: 250,

                }}
            />
        </View>
    );
}

export default Header;