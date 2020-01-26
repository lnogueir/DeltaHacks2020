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

<View style={styles.inputContainer}>
<Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 1)'}
style={styles.inputIcon}
></Icon>
    <TextInput style={styles.input} placeholder={'Username'} placeholderTextColor={'rgba(255, 255, 255, 1)' 
    }></TextInput>
    
</View>

<View>
<Icon name={'ios-lock'} size={28} color={'rgba(255, 255, 255, 1)'}
style={styles.inputIcon}
></Icon>
    <TextInput style={styles.input} placeholder={'Password'} secureTextEntry = {true} placeholderTextColor={'rgba(255, 255, 255, 1)' 
    }></TextInput>

    <TouchableOpacity style={styles.buttonEye}> {/*show password*/}
<Icon name={'ios-eye'} size={28} color={'rgba(255, 255, 255, 1)'}>
</Icon>

    </TouchableOpacity>

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
        top: 6,
        right: 37, 
      },
      buttonLogin:{
          width: WIDTH - 55,
          height: 45,
          borderRadius: 25,
          backgroundColor: 'yellow',
           justifyContent: 'center',
           marginTop: 20,
      }
})