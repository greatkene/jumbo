import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer'

import {
    Avatar, Button, Icon
} from 'react-native-elements'
import { COLORS, SIZES } from '../config';

function DrawerContent(props) {
    return (
        <View>
            <DrawerContentScrollView {...props}>
                <View>
                    <Avatar 
                        // rounded
                        avatarStyle={styles.avatar}
                        source = {require('../assets/freeDelivery/hillyspizza.jpg')}
                    />
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        borderWidth: 2,
        borderColor: COLORS.gray3,
        borderRadius: SIZES.radius,
    }
})

export default DrawerContent;