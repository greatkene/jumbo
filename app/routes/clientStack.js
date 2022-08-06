import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'
import SearchScreen from '../screens/SearchScreen'
import SearchResultScreen from '../screens/SearchResultScreen'

const ClientSearch = createStackNavigator()

export const ClientStack = ({navigation}) => {
  return (
    <ClientSearch.Navigator>
        <ClientSearch.Screen 
                name ="SearchScreens"
                component ={SearchScreen}
                options = {
                    ()=>({
                        headerShown:false
                })
            }
        />
        <ClientSearch.Screen 
            name='SearchResultScreen'
            component={SearchResultScreen}
            options = {
                () => ({
                    headerShown: false
                })
            }
        />
    </ClientSearch.Navigator>
  )
}

