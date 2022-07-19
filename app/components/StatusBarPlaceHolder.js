import React from 'react';
import { StyleSheet, StatusBar, View, Platform } from 'react-native'

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 35 : StatusBar.currentHeight;



function StatusBarPlaceHolder(props) {
    return (
        <View style={{
            width: "100%",
            height: STATUS_BAR_HEIGHT,    
        }}>
            <StatusBar
                barStyle={Platform.OS === 'ios'  ? "dark-content" : "light-content" }
                translucent={true}
            />
        </View>
    );
}

export default StatusBarPlaceHolder;