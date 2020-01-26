import React, { useState, useEffect, Component } from 'react';
import { Text, View, Dimensions, Animated } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import imgB from '../assets/sampleBackground1.jpg';
import { withOrientation } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView } from 'react-native-gesture-handler';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1500,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

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
    <FadeInView style={styles.mainContainer}>
    <View style = {styles.logoContainer}>
    
    <Image source={{uri: 'https://i.pinimg.com/originals/58/2e/65/582e6581f45ccac1dcc7cf271e4e88ec.png'}} style={styles.logo}/>
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
        <TextInput style={styles.input} placeholder={'Password'} secureTextEntry = {this.state.showPass} placeholderTextColor={'rgba(255, 255, 255, 1)' 
        }/>

<TouchableOpacity style={styles.buttonEye} onPress = {this.showPass.bind(this)}>
  <Icon name={this.state.press == false ? 'ios-eye-off' : 'ios-eye'} size={26} color={'rgba(255, 255, 255, 1)'}/>
</TouchableOpacity>

<TouchableOpacity style={styles.buttonLogin}>
  <Text style={styles.text}>Log In</Text>
</TouchableOpacity>

    </View>

    </FadeInView>



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