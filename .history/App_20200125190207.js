import React, { Component } from 'react';
import { Text, View} from 'react-native';
import HomeScreen from './components/HomeScreen'
import LoginPage from './components/LoginPage'
import Navigate from './components/Navigate'
import {Platform, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';  //for accessing the pre-defined icons

class Home extends Component {
  render(){
return(
<HomeScreen></HomeScreen>
)
  }
}

class Login extends Component {
  render(){
return(
<LoginPage></LoginPage>
)
  }
}

class About extends Component {
  render(){
return(
<Text>kajkjs</Text>
)
  }
}

export default createMaterialBottomTabNavigator({
Home: {screen: Home}, 
Login: {screen: Login},
About: {screen: About},
}, {
initalRouteName: 'Settings',
order: ['Settings, ']

})

const styles = StyleSheet.create({
  container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor: '#ffffff',
      flex: 1,
    },
})