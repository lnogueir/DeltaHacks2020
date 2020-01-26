import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground} from 'react-native';
import imgB from '../assets/sampleBackground.jpg';
import { withOrientation } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';


export default class LoginPage extends Component {
  render(){
return(
<ImageBackground style={styles.backgroundContainer} source={imgB}>
<View style = {styles.logoContainer}>
<Image
          source={{uri: 'https://i.pinimg.com/originals/58/2e/65/582e6581f45ccac1dcc7cf271e4e88ec.png'}} style={styles.logo}/>
<Text style={styles.logoText}>Sample Text</Text>
</View>
<View>
    <TextInput style={styles.input} placeholder={'Username'} placeholderTextColor={rgba(255, 255, 255)}></TextInput>
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
      logo: {
        width: 120, 
        height: 120,
      },
      logoContainer: {
          alignItems: 'center',
      },
      logoText:{
        color: 'white',
        fontSize: 15,
        fontWeight: '200',
        marginTop: 10,
      }
})