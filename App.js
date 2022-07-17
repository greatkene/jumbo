import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

import Header from './app/components/Header';

function App(props) {
  return (
    <View style={{
      flex:1
    }}>
      <Header />
    </View>
  );
}

export default App;