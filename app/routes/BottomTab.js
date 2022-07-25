import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Icon} from 'react-native-elements'

// File Imports
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MyOrdersScreen from '../screens/MyOrdersScreen';
import MyAccountScreen from '../screens/MyAccountScreen'
import {COLORS, FONTS}   from '../config';

const BottomTabs = createBottomTabNavigator();

function BottomTab(props) {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor : COLORS.primary,
                tabBarInactiveTintColor: COLORS.gray,
            }}
        >
            <BottomTabs.Screen 
                name="Home"
                component={HomeScreen}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name='home'
                            type='material'
                            color={color}
                            size={28}
                        />
                    )
                }}
            />
            <BottomTabs.Screen 
                name="Search"
                component={SearchScreen}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name='search'
                            type='material'
                            color={color}
                            size={28}
                        />
                    )
                }}
            />
            <BottomTabs.Screen 
                name="Order"
                component={MyOrdersScreen}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name='view-list'
                            type='material'
                            color={color}
                            size={28}
                        />
                    )
                }}
            />
            <BottomTabs.Screen 
                name="Account"
                component={MyAccountScreen}
                options = {{
                    tabBarIcon: ({color}) => (
                        <Icon
                            name='person'
                            type='material'
                            color={color}
                            size={28}
                        />
                    )
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default BottomTab;