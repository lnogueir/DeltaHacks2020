import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground} from 'react-native';
import imgB from '../assets/sampleBackground.jpg';
import logo from '../assets'


export default class LoginPage extends Component {
  render(){
return(
<ImageBackground style={styles.backgroundContainer} source={imgB}>
<View>
<Image
style={{width: 50, height: 50}}
          source={{uri: 'https://i.pinimg.com/originals/58/2e/65/582e6581f45ccac1dcc7cf271e4e88ec.png'}}/>
</View>
</ImageBackground>
)
  }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        width: null,
        height: null,
        
        //optional
        justifyContent: 'center',
        alignItems: 'center',
      },

})