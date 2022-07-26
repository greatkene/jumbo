import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements';

import BottomTab from './BottomTab';
import { COLORS, FONTS } from '../config';
import PaymentScreen from '../screens/PaymentScreen';
import PromotionScreen from '../screens/PromotionScreen';
import SettingScreen from '../screens/SettingScreen'

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name='BottomTab'
                component={BottomTab}
                options = {{
                    headerShown: false,
                    title: "Home",
                    drawerIcon: ({focussed, size}) => {
                        <Icon 
                            type='material-community'
                            name='home'
                            color={focussed ? COLORS.gray3 : COLORS.gray2 }
                            size={size}
                        />
                    },
                    drawerLabelStyle: {
                        ...FONTS.body3
                    }
                }}
            />
             <Drawer.Screen 
                name='PaymentScreen'
                component={PaymentScreen}
                options = {{
                    headerShown: false,
                    title: "Payment",
                    drawerIcon: ({focussed, size}) => {
                        <Icon 
                            type='material-community'
                            name='home'
                            color={focussed ? COLORS.gray3 : COLORS.gray2 }
                            size={size}
                        />
                    },
                    drawerLabelStyle: {
                        ...FONTS.body3
                    }
                }}
            />
            <Drawer.Screen 
                name='PromotionScreen'
                component={PromotionScreen}
                options = {{
                    headerShown: false,
                    title: "Settings",
                    drawerIcon: ({focussed, size}) => {
                        <Icon 
                            type='material-community'
                            name='home'
                            color={focussed ? COLORS.gray3 : COLORS.gray2 }
                            size={size}
                        />
                    },
                    drawerLabelStyle: {
                        ...FONTS.body3
                    }
                }}
            />
            <Drawer.Screen 
                name='SettingScreen'
                component={SettingScreen}
                options = {{
                    headerShown: false,
                    title: "Promotions",
                    drawerIcon: ({focussed, size}) => {
                        <Icon 
                            type='material-community'
                            name='home'
                            color={focussed ? COLORS.gray3 : COLORS.gray2 }
                            size={size}
                        />
                    },
                    drawerLabelStyle: {
                        ...FONTS.body3
                    }
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;