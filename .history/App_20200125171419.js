import React, { Component } from 'react';
import { Text, View} from 'react-native';
import HomeScreen from './components/HomeScreen'
import Login from './components/LoginPage'
import {Platform, StyleSheet} from 'react-native';

export default class App extends Component {
  render(){
return(
  <View style={styles.container}>
<LoginPage></LoginPage>
</View>
)
  }
}

const styles = StyleSheet.create({
  container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor: '#ffffff',
      flex: 1,
    },
})