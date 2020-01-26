import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'


export default class TaskPage extends Component {
  render(){
return(

    
    
<ImageBackground source={imgB} style={styles.backgroundContainer}>
<View style={styles.mainContainer}>


    <Text style={styles.name}>Welcome</Text>
    <Text style = {styles.aboutText}>username
    </Text>

    <View style={styles.inputContainer}>
    <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 1)'}
    style={styles.inputIcon}
    />
        <TextInput style={styles.input} placeholder={'Username'} placeholderTextColor={'rgba(255, 255, 255, 1)' 
        }/>
        
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
  name:{
    fontSize: 50, 
    fontWeight: "200",
    color: "white",
    textAlign: "center",
    marginLeft: 50,
  },
  aboutText:{
    color: 'white',
    width: 300,
    fontSize: 16,
    lineHeight: 25,
    textAlign: "center",
    marginLeft: 170,
  },
  mainContainer:{
    width: 700,
    marginBottom: 50,
    top: -170,
    left: -100,
  },
  inputIcon:{
    position: 'absolute',
    top: 6,
    left: 37,
},
input: {
    width: 2000, 
  height: 45, 
  borderRadius: 25,
  fontSize: 16, 
  paddingLeft: 45,
  backgroundColor: 'rgba(0, 0, 0, .35)',
  color: 'rgba(255, 255, 255, 1)', 
  marginHorizontal: 25,
},      inputContainer:{
    marginTop: 10,
    marginBottom: 10,
  },
})