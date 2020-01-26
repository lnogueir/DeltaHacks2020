import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import {Platform, StyleSheet,Image} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg'


export default class aboutUs extends Component {
  render(){
return(
<ImageBackground source={imgB}/>
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
  }
})