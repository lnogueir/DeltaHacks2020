import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import imgB from '../assets/sampleBackground.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { ScrollView } from 'react-native-gesture-handler';

const {width: WIDTH} = Dimensions.get('window')
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
          showPass: true,
          press: false,
        };
      }

     showPass = () => {
       if (this.state.press == false){
         this.setState({showPass: false, press: true})
       }
       else {
        this.setState({showPass: true, press: false})
      }
     }

      onLogin() {
        const { username, password } = this.state;
    
        Alert.alert('Credentials', `${username} + ${password}`);
      }

  render(){
return(
  <ImageBackground style={styles.backgroundContainer} source={imgB}>
    <View style={styles.mainContainer}>
    <View style = {styles.logoContainer}>
    <Image source={{uri: 'https://i.pinimg.com/originals/58/2e/65/582e6581f45ccac1dcc7cf271e4e88ec.png'}} style={styles.logo}/>
          {/* <Text style={styles.logoText}>Sample Text</Text> */}
    </View>

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
        <TextInput style={styles.input} placeholder={'Password'} secureTextEntry = {this.state.showPass} placeholderTextColor={'rgba(255, 255, 255, 1)' 
        }/>

<TouchableOpacity style={styles.buttonEye} onPress = {this.showPass.bind(this)}>
  <Icon name={this.state.press == false ? 'ios-eye-off' : 'ios-eye'} size={26} color={'rgba(255, 255, 255, 1)'}/>
</TouchableOpacity>

    </View>

    </View>

    <TouchableOpacity style={styles.buttonLogin}>
  <Text style={styles.text}>sakosa</Text>
</TouchableOpacity>


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
        marginBottom: 150,
      },
      logo: {
        width: 120, 
        height: 120,
      },
      logoContainer: {
          alignItems: 'center',
          marginBottom: 50,
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
          width: WIDTH - 55,
          height: 45,
          borderRadius: 25,
          backgroundColor: 'rgba(255, 255, 0, .8)',
           justifyContent: 'center',
           marginTop: -120,
      },
      text:{
        color: 'rgba(255, 255, 255, 1)',
        textAlign: "center",
        fontSize: 15,
      }

})