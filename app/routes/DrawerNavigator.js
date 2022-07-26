import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Icon } from 'react-native-elements';

import BottomTab from './BottomTab';
import { COLORS } from '../config';

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
                    }
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;