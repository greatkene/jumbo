import React from 'react';
import { StyleSheet, StatusBar, View, Platform } from 'react-native'

const STATUS_BAR_HEIGHT = Platform.OS === 'ios' ? 0 : StatusBar.currentHeight;



function StatusBarPlaceHolder(props) {
    return (
        <View style={{
            width: "100%",
            height: STATUS_BAR_HEIGHT,
            backgroundColor: "#fff"
        }}>
            <StatusBar
                barStyle="light-content"
                translucent={true}
            />
        </View>
    );
}

export default StatusBarPlaceHolder;