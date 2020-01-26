import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground, TextInput} from 'react-native';
import imgB from '../assets/sampleBackground.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH} = Dimensions.get('window')
export default class LoginPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          username: '',
          password: '',
        };
      }

      onLogin() {
        const { username, password } = this.state;
    
        Alert.alert('Credentials', `${username} + ${password}`);
      }

  render(){
return(
<ImageBackground style={styles.backgroundContainer} source={imgB}>
<View style = {styles.logoContainer}>
<Image
          source={{uri: 'https://i.pinimg.com/originals/58/2e/65/582e6581f45ccac1dcc7cf271e4e88ec.png'}} style={styles.logo}/>
<Text style={styles.logoText}>Sample Text</Text>
</View>

<View>
<Icon name={'ios-person-outline'} size={28} color={'rgba(255, 255, 255, 1'}
style={styles.inputIcon}
></Icon>
    <TextInput style={styles.input} placeholder={'Username'} placeholderTextColor={'rgba(255, 255, 255, 1)' 
    }></TextInput>
    
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
      logo: {
        width: 120, 
        height: 120,
      },
      logoContainer: {
          alignItems: 'center',
      },
      logoText:{
        color: 'white',
        fontSize: 15,
        fontWeight: '200',
        marginTop: 10,
      }, 
      input: {
          width: WIDTH - 55, 
        height: 45, 
        borderRadius: 25,
        fontSize: 16, 
        paddingLeft: 16,
        backgroundColor: 'rgba(0, 0, 0, .35)',
        color: 'rgba(255, 255, 255, 1)', 
        marginHorizontal: 25,

      },
      inputIcon:{
          position: 'absolute',
          top: 10,
          left: 37,
      }
})