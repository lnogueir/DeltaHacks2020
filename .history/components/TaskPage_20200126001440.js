import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/AntDesign'

const {width: WIDTH} = Dimensions.get('window')
export default class TaskPage extends Component {
  render(){
return(

    
    
<ImageBackground source={imgB} style={styles.backgroundContainer}>
<View style={styles.mainContainer}>


    <Text style={styles.name}>Welcome</Text>
    <Text style = {styles.aboutText}>username
    </Text>



    <View style={styles.mainContainer}>
    <View style = {styles.logoContainer}>

          {/* <Text style={styles.logoText}>Sample Text</Text> */}
    </View>
    <Text style={styles.name}>bWell</Text>
    <View style={styles.inputContainer}>
    <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 1)'}
    style={styles.inputIcon}
    />
        <TextInput style={styles.input} placeholder={'Username'} placeholderTextColor={'rgba(255, 255, 255, 1)' 
        }/>
        
    </View>

    <View>
    <Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 1)'}
    style={styles.inputIcon}
    />
        <TextInput style={styles.input} placeholder={'Password'} placeholderTextColor={'rgba(255, 255, 255, 1)' 
        }/>

<TouchableOpacity style={styles.buttonEye}>
  <Icon name={'ios-eye'} size={26} color={'rgba(255, 255, 255, 1)'}/>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonLogin}>
  <Text style={styles.text}>Log In</Text>
</TouchableOpacity>

    </View>

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
    marginLeft: 500,
    width: 500, 
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
  inputContainer:{
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
      width: WIDTH - 55, 
    height: 45, 
    borderRadius: 25,
    fontSize: 16, 
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, .35)',
    color: 'rgba(255, 255, 255, 1)', 
    marginHorizontal: 25,
  },
  inputIcon:{
      position: 'absolute',
      top: 6,
      left: 37,
  },
  buttonEye: {
    position: 'absolute',
    top: 8,
    right: 37, 
  },
  buttonLogin:{
       justifyContent: 'center',
       marginTop: 10,
       width: WIDTH - 55, 
       height: 45, 
       borderRadius: 25,
       fontSize: 16, 
       paddingLeft: 4,
       backgroundColor: 'rgba(0, 0, 0, .3)',
       color: 'rgba(255, 255, 255, 1)', 
       marginHorizontal: 25,
       textAlign: "center",
  },
  text:{
    color: 'rgba(255, 255, 255, 1)',
    textAlign: "center",
    fontSize: 15,
    fontWeight: "400",
  }
})