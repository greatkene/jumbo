import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import Header from './app/components/Header';
// import AuthLayout from './app/screens/Authentication/AuthLayout';
import SignIn from './app/screens/Authentication/SignIn';

function App(props) {
  return (
    <View style={{
      flex:1
    }}>
      <SignIn />
    </View>
  );
}

export default App;