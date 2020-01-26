import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground} from 'react-native';


export default class LoginPage extends Component {
  render(){
return(
<ImageBackground style={styles.backgroundContainer}></ImageBackground>
)
  }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center', //align items centers horizontally
        justifyContent: 'center',
      },

})