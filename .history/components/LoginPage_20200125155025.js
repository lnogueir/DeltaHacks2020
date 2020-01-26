import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground, Image} from 'react-native';
import imgB from '../assets/sampleBackground.jpg'


export default class LoginPage extends Component {
  render(){
return(
<ImageBackground style={styles.backgroundContainer} source={imgB}>
<View>

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