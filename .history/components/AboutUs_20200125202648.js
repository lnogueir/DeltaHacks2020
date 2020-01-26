import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';


export default class aboutUs extends Component {
  render(){
return(
<ImageBackground source={imgB} style={styles.backgroundContainer}>
<View style={styles.mainContainer}>
    <View style = {styles.logoContainer}>

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
    fontWeight: "300",
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