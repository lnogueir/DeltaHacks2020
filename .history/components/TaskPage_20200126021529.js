import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign';
import RowItem from './RowItem';

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
      <View style={{flex: 1, flexDirection: 'column'}}>
    <RowItem>
    <Icon
    style = {styles.icon}
    name = 'pluscircle'
    size = {30}
    onPress = {() => <RowItem/> }
    />
    </RowItem>

    <RowItem/>
    

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
icon:{
    zIndex: 100,
},
  name:{
    fontSize: 50, 
    fontWeight: "200",
    color: "white",
    textAlign: "left",
    marginTop: 200,
  },
  rowItems:{
    display: 'flex',
    color: 'white',
    flexDirection: "row",
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