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
    <Text style={styles.name}>About</Text>
    <Text>We envision a world where a person with diabetes can live a 
    full and healthy life, freed from worrying about the daily grinds of their therapy. 
    In short, we want to make diabetes suck less. And with over 2 million registered 
    users in more than 70 countries, we’re well on our way.</Text>
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
})