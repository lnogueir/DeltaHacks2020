import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import {Platform, StyleSheet,Image} from 'react-native';
import {ImageBackground} from 'react-native';


export default class aboutUs extends Component {
  render(){
return(
<ImageBackground/>
)
  }
}

const styles = StyleSheet.create({
    container: {
        color: '#ffffff',
        backgroundColor: '#ffffff',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', //align items centers horizontally
      },
      image1:{
          width: 100, 
          height: 100, 
      }
})