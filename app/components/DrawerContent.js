import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Drawer } from 'react-native-paper';

import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem
} from '@react-navigation/drawer'

import {
    Avatar, Button, Icon
} from 'react-native-elements'
import { COLORS, FONTS, SIZES } from '../config';

function DrawerContent(props) {
    return (
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={{backgroundColor: COLORS.primary,}}>

                    <View style={{ 
                        flexDirection: 'row', 
                        alignItems: 'center',  
                        padding: 20,
                    }}>
                        <Avatar 
                            rounded
                            avatarStyle={styles.avatar}
                            source = {require('../assets/freeDelivery/hillyspizza.jpg')}
                            size= {65}
                        />
                        <View style={{marginLeft: 12}}>
                            <Text style={{...FONTS.body3, color: COLORS.white}}>Softgirl</Text>
                            <Text style={{...FONTS.body5, color: COLORS.white}}>softgirl4life@jumbo.com</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 5}}>

                        <View style={{flexDirection: 'row', marginTop: 0}}>
                            <View style={{marginLeft: 10, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{...FONTS.h3, color: COLORS.white}}> 1</Text>
                                <Text style={{...FONTS.body4, color: COLORS.white}}> My Favorites</Text>
                            </View>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 0}}>
                            <View style={{marginLeft: 10, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{...FONTS.h3, color: COLORS.white}}> 0</Text>
                                <Text style={{...FONTS.body4, color: COLORS.white}}> My Cart</Text>
                            </View>
                        </View>

                    </View>

                </View>
                
                <DrawerItemList {...props} />
                <DrawerItem
                    label='Payment'
                    icon = {({color, size}) => {
                        <Icon
                            type='material-community'
                            name='credit-card-outline'
                            color={ color }
                            size={size}
                        />
                    }}                                                 
                />

            </DrawerContentScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        borderWidth: 4,
        borderColor: COLORS.gray3,
        borderRadius: SIZES.radius,
    }
})

export default DrawerContent;