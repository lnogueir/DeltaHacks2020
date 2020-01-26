import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {Platform, StyleSheet,Image} from 'react-native';


export default class HomeScreen extends Component {
  render(){
return(
<View style={styles.container}>
<Image source={require('../assets/a3.png')} style={styles.image1}/>
<Text>
no u
</Text>
</View>
)
  }
}

const styles = StyleSheet.create({
    container: {
        color: '#ffffff',
        backgroundColor: '#ffffff',
        flex: 1,
      },
      image1:{
          width: 100, 
          height: 100, 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
      }
})