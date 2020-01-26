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
<Image source={{uri: 'https://images.vexels.com/media/users/3/153909/isolated/preview/0f1ad6cac5ee05d1cb88d1e5cd470164-soft-pretzel-illustration-by-vexels.png'}} style={styles.logo}/>
          {/* <Text style={styles.logoText}>Sample Text</Text> */}
    <Text style={styles.name}>About</Text>
    <Text style = {styles.aboutText}>We visualize a world where a person with diabetes can live a 
    full and healthy life.
    We want diabetes to be less troublesome. 
    We put people first.
    </Text>
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
  aboutText:{
    color: 'white',
    width: 300,
    fontSize: 16,
    marginTop: 120,
    lineHeight: 25,
    textAlign: "center",
  },
  mainContainer:{
    marginBottom: 50,
  },
  logo: {
    width: 120, 
    height: 120,
    position: "absolute",
    top: 0,
  },
})