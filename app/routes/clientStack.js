import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'

const ClientSearch = createStackNavigator()

export const ClientStack = ({navigation}) => {
  return (
    <ClientSearch.Navigator>
        <ClientSearch.Screen 
            name='SearchScreem'
            component={SearchScreen}
            options = {
                () => ({
                    headerShown: false
                })
            }
        />
    </ClientSearch.Navigator>
  )
}

