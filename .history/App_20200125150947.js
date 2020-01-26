import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import HomeScreen from './components/HomeScreen'
import {Platform, StyleSheet} from 'react-native';

export default class App extends Component {
  render(){
return(
  <View style={styles.container}>

<HomeScreen></HomeScreen>
</View>
)
  }
}

const styles = StyleSheet.create({
  container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor: '#000000',
      flex: 1,
    },
})