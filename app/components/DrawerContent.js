import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native'

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
                    label = "Payment"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "wallet"
                            color ={color}
                            size ={size}
                        />
                    )}
                />

                <DrawerItem
                    label='Promotion'
                    icon = {({color, size}) => (
                        <Icon
                            type ="material-community"
                            name= "tag-heart"
                            color={ color }
                            size={size}
                        />
                    )}                                                 
                />

                <DrawerItem 
                    label = "Settings"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "cog-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                />

                <DrawerItem 
                    label = "Help"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "lifebuoy"
                            color ={color}
                            size ={size}
                        />
                    )}
                />
                
                
                <View style={{borderTopWidth: 1, borderTopColor: COLORS.gray2}}>
                    <Text style={styles.preferences}>Preferences</Text>

                    <View style={styles.switchText}>
                        <Text style={styles.darkThemeText}>Dark Theme</Text>
                        <View style ={{ paddingRight:10}}>
                            <Switch 
                                trackColor = {{false: "#767577",true : "#81b0ff"}}
                                thumbColor = "#f4f3f4"
                            />
                        </View>
                    </View>

                </View>
            </DrawerContentScrollView>

            <DrawerItem 
                    label = "Log Out"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "logout"
                            color ={color}
                            size ={size}
                        />
                    )}
                />

        </View>
    );
}

const styles = StyleSheet.create({
    avatar: {
        borderWidth: 4,
        borderColor: COLORS.gray3,
        borderRadius: SIZES.radius,
    },
    preferences:{
        fontSize: 16,
        paddingTop:10,
        paddingLeft:20,
        ...FONTS.body3
    },
    switchText:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingLeft:20,
        paddingVertical:5,
        paddingRight:10
    },
    darkThemeText:{
        color:COLORS.darkGray,
        paddingTop:10,
        paddingLeft:0,
        ...FONTS.body3
    }
})

export default DrawerContent;