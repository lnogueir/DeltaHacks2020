import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React, { Component } from 'react';
import HomeScreen from './HomeScreen.js';
import { Text, View } from 'react-native';


export default class App extends Component {
  render(){
return(
const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
});
<View>jskjsk</View>
const App = createAppContainer(MainNavigator);
)
  }
}