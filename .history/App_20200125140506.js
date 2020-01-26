import React, { Component } from 'react';
import { Text, View } from 'react-native';
import HomeScreen from './components/HomeScreen'

export default class App extends Component {
  render(){
return(
  <View style={styles.container}>
<HomeScreen></HomeScreen>
</View>
)
  }
}