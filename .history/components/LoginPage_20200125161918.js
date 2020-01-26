import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import {Platform, StyleSheet,Image, ImageBackground, TextInput, Button} from 'react-native';
import imgB from '../assets/sampleBackground.jpg';
import { withOrientation } from 'react-navigation';

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
<TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
    
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
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },
})