import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground} from 'react-native';
import imgB from '../assets/sampleBackground.jpg'


export default class LoginPage extends Component {
  render(){
return(
<ImageBackground style={styles.backgroundContainer} source={imgB}></ImageBackground>
)
  }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        height: 800,
        alignItems: 'center', //align items centers horizontally
        justifyContent: 'center',

      },

})