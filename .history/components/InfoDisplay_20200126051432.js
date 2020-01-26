import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import imgB from '../assets/sample1.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import RowItem from './RowItem';

const {width: WIDTH} = Dimensions.get('window')
export default class InfoDisplay extends Component {

    
  render(){
return(

    
    
<ImageBackground source={imgB} style={styles.backgroundContainer}>
<View style={styles.mainContainer}>


    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={styles.row}>
        <Text style={styles.text}>Meal X</Text>

        <View style = {styles.displayIndex}>
        <Text style={styles.text2}>GLindex: 99</Text>
        <Text style={styles.text2}>GLindex: 80</Text>
        </View>
    </View>


      </View>
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
  row: {
    marginTop: 30,
    borderRadius: 15,
    width: 300, 
    height: 525,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    display: 'flex',
    flexDirection: 'column',
    alignItems: "center",
  },

  imagesDisplay:{
   display: 'flex',   
  },

  


})