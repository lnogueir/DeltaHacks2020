import React, { useState, useEffect, Component } from 'react';
import { Text, View } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import { withOrientation } from 'react-navigation';


export default class LandingPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
          showPass: true,
          press: false,
        };
      }


  render(){
return(
  <ImageBackground style={styles.backgroundContainer} source={imgB}>
    <View style={styles.mainContainer}>
    <View style = {styles.logoContainer}>
    
    <Image source={{uri: 'https://i.pinimg.com/originals/58/2e/65/582e6581f45ccac1dcc7cf271e4e88ec.png'}} style={styles.logo}/>
          {/* <Text style={styles.logoText}>Sample Text</Text> */}
    </View>
    <Text style={styles.name}>bWell</Text>


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
      name:{
        fontSize: 50, 
        fontWeight: "200",
        color: "white",
        textAlign: "center",
      },
      mainContainer:{
        marginBottom: 50,
      },
      logo: {
        width: 120, 
        height: 120,
      },
      logoContainer: {
          alignItems: 'center',
          marginBottom: 30,
      },
      logoText:{
        color: 'white',
        fontSize: 15,
        fontWeight: '200',
        marginTop: 10,
      }, 



})