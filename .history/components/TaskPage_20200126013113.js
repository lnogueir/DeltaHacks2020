import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import img1 from '../assets/Group1628.jpg';

const {width: WIDTH} = Dimensions.get('window')
export default class TaskPage extends Component {
  render(){
return(

    
    
<ImageBackground source={imgB} style={styles.backgroundContainer}>
<View style={styles.mainContainer}>


    <Text style={styles.name}>Welcome</Text>
    <Text style = {styles.aboutText}>username
    </Text>

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </ScrollView>
    </SafeAreaView>


    


<View style = {styles.imagesDisplay}>

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