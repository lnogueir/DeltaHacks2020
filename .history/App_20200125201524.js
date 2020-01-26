import React, { Component } from 'react';
import { Text, View} from 'react-native';
import LoginPage from './components/LoginPage'
import {Platform, StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';  //for accessing the pre-defined icons
import Icon2 from 'react-native-vector-icons/MaterialIcons'; 
import { white } from 'react-native-paper/src/styles/colors';
import AboutUs from './components/AboutUs'

class Login extends Component {
  render(){
return(
<LoginPage></LoginPage>
)
  }
}

class About extends Component {
  render (){
    return (
      <AboutUs/>
    )
  }
}


class Tracking extends Component {
  render(){
return(
<Text>kajkjs</Text>
)
  }
}
{/*food-apple*/}
export default createMaterialBottomTabNavigator({
Login: {screen: Login, 
  navigationOptions:{
    tabBarLabel:'Login',
    tabBarIcon:({tintiColor})=>(
      <Icon name= 'login' color={white} size= {24} />
    )
  }},
About: {screen: About, 
  navigationOptions:{
    tabBarLabel:'About',
    tabBarIcon:({tintiColor})=>(
      <Icon name= 'food-apple' color={white} size= {24} />
    )}
},

Tracking: {screen: Tracking,
  navigationOptions:{
    tabBarLabel:'Track',
    tabBarIcon:({tintiColor})=>(
      <Icon2 name= 'speaker-notes' color={white} size= {24} />
    )}
}, 
}, {
initalRouteName: 'Login', 
//order: ['Login', 'About', 'Tracking'],
activeTintColor: '#5444c4',
shifting: true,
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