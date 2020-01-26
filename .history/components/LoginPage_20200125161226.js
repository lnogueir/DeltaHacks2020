import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground, TextInput} from 'react-native';
import imgB from '../assets/sampleBackground.jpg';
import { withOrientation } from 'react-navigation';

const {width: WIDTH} = Dimensions.get('window')
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
    <TextInput style={styles.input} placeholder={'Username'} placeholderTextColor={'rgba(255, 255, 255, 1)' 
    }></TextInput>
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
      }, 
      input: {
          width: WIDTH - 55, 
        height: 45, 
        borderRadius: 25,
        color: 'white',
        fontSize: 16, 
        paddingLeft: 16,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        
      }
})