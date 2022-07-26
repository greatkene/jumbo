import React from 'react';
import {createStackNavigator, transitionPresets} from '@react-navigation/stack'
import SignInScreen from '../screens/Authentication/SignInScreen';
import RegisterScreen from '../screens/Authentication/RegisterScreen';
import OnBoardingScreen from '../screens/OnBoardingScreen';
// import HomeScreen from '../screens/HomeScreen';
// import BottomTab from './BottomTab';
import RestaurantMapScreen from '../screens/RestaurantMapScreen';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();


export default function AuthStack(props) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <Stack.Screen name="Login" component={SignInScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen name="RestaurantMapScreen" component={RestaurantMapScreen} />
        </Stack.Navigator>
    );
}

