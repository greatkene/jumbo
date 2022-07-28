import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements';

import BottomTab from './BottomTab';
import { COLORS, FONTS } from '../config';
import PaymentScreen from '../screens/PaymentScreen';
import PromotionScreen from '../screens/PromotionScreen';
import SettingScreen from '../screens/SettingScreen'
import SupportScreen from '../screens/SupportScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator(props) {
    return (
        <Drawer.Navigator
            drawerContent={props => <DrawerContent {...props} />}
        >
            <Drawer.Screen 
                name='BottomTab'
                component={BottomTab}
                options = {{
                    headerShown: false,
                    title: "Home",
                    drawerIcon: ({focused, size}) => (
                        <Icon 
                            type='material-community'
                            name='home'
                            color={focused ? COLORS.gray3 : COLORS.gray2 }
                            size={size}
                        />
                    ),
                    drawerLabelStyle: {
                        ...FONTS.body3
                    }
                }}
            />

            <Drawer.Screen 
                name='SupportScreen'
                component={SupportScreen}
                options = {{
                    headerShown: false,
                    title: "Support",
                    drawerIcon: ({focused, size}) => (
                        <Icon 
                            type='material'
                            name='support-agent'
                            color={focused ? COLORS.gray3 : COLORS.gray2 }
                            size={size}
                        />
                    ),
                    drawerLabelStyle: {
                        ...FONTS.body3
                    }
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;