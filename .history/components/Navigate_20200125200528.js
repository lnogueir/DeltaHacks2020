import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialIcons';  //for accessing the pre-defined icons
import HomeScreen from './About'
import LoginPage from './LoginPage';

export default createMaterialBottomTabNavigator({
    Home:{screen:HomeScreen, //creating an object called Home
    navigationOptions:{
      tabBarLabel:'Home',
      tabBarIcon:({tintiColor})=>(
        <Icon name= 'home' color={tintiColor} size= {24} />
      )
    }
    },
    Settings: {screen: LoginPage,
      navigationOptions:{
        tabBarLabel:'FindBars',
        tabBarIcon:({tintiColor})=>(
          <Icon name= 'local-bar' color={tintiColor} size= {24} />
        )
      }
    } //make a settings page called FindBars
    },{
      initialRouteName: 'Home', //When you open the app, it directly open up home page
      activeTintColor: 'white', //the text color of the navBar at the bottom chanages to black
      shifting: true, // when you click the icon, the icon pops out and there is smooth transition between pages
    
    })