import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import img1 from '../assets/Group1628.jpg';
import Table from './Table';

const {width: WIDTH} = Dimensions.get('window')
export default class TaskPage extends Component {
  render(){
return(

    
    
<ImageBackground source={imgB} style={styles.backgroundContainer}>
<View style={styles.mainContainer}>


    <Text style={styles.name}>Welcome</Text>
    <Text style = {styles.aboutText}>username
    </Text>

    <View style={styles.rowItems}>
    <Text style={styles.textt}>Your Glycemic Index: </Text>
    </View>
    <Table/>


<View style = {styles.imagesDisplay}>
    <Image source={img1} style = {styles.g1}></Image>
</View>

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
  mainContainer:{
   marginTop: 80,
  },
  name:{
    fontSize: 50, 
    fontWeight: "200",
    color: "white",
    textAlign: "left",
  },
  rowItems:{
    display: 'flex',
    color: 'white',
    flexDirection: "row",
  },
  textt:{
      color: 'white',
  },
  aboutText:{
    color: 'white',
    width: 300,
    fontSize: 16,
    lineHeight: 25,
    textAlign: "left",
  },
  imagesDisplay:{
   display: 'flex',   
  },
  g1: {
    flex: 1,
    width: 100,
    height: 100,
    //optional
    justifyContent: 'center',
    alignItems: 'center',
  }


})