import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Icon, withBadge } from 'react-native-elements'

import {icons, FONTS, SIZES, COLORS } from "../../config"


function Header({navigation}) {
    const BadgeIcon = withBadge(0)(Icon)

    return (
        <View style={styles.header}>
            <View>
                <Icon 
                    type= "material-community"
                    name="menu"
                    size={35}
                    onPress = {() => {
                        navigation.toggleDrawer()
                    }}
                />
            </View>
            <View style={{marginTop: 5}} >
                <Text style={{...FONTS.body3}}>Welcome, Softgirl</Text>
            </View>
            <View>
                <BadgeIcon 
                    type= "material-community"
                    name="cart"
                    size={35}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: SIZES.padding,
        paddingHorizontal: SIZES.padding
    }
})

export default Header;