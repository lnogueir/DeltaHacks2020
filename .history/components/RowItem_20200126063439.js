import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {StyleSheet} from 'react-native';
import { black } from 'react-native-paper/src/styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default class RowItem extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
          GLindex: '',
          GLvalue: '',
          meal: '',
          loading: false
        };
    }

    GLindex = () => {
        if (this.state.GLindex > 1){
          this.setState({showPass: false, press: true})
        }
        else {
         this.setState({showPass: true, press: false})
       }
      }

  render(){
    if (this.state.GLindex>=18){
            
    }
return(

        <View style={styles.row}>
           <Icon
         style = {{marginLeft: 10}}
         name = 'minus-circle-outline'
        size = {30}/>
        <Text style={styles.text}>Meal X</Text>

        <View style = {styles.rightContent}>
        <View style = {styles.displayIndex}>
        <Text style={styles.text2} onChangeText={this.state.GLindex}>GLindex: 20</Text>
        <Text style={styles.text2}>GLvalue: 80</Text>
        </View>

        <View style = {styles.displayDots}>
        <View style = {styles.red}></View>
        <View style = {styles.yellow}></View>
        <View style = {styles.green}></View>
        </View>
        </View>

        </View>

    )
  }
}

const styles = StyleSheet.create({
    row: {
        marginTop: 30,
        borderRadius: 15,
        width: 300, 
        height: 100,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
      },
      text:{
          fontSize: 16,
    fontWeight: '200',
      marginLeft: 10, 
      },
      rightContent: {
        display: "flex",
        flexDirection: 'row',
      },
      displayIndex: {
        display: "flex",
        flexDirection: "column",
      },
      displayDots :{
        display: "flex",
        flexDirection: "column",
      }
      text2:{
        fontSize: 16,
        fontWeight: '200',
        marginLeft: 75,
    },
    red: {
      width: 10,
      height: 10,
      backgroundColor: 'red',
      borderRadius: 5,
    },
    yellow: {
      width: 10,
      height: 10,
      backgroundColor: 'yellow',
      borderRadius: 5,
    },
    green: {
      width: 10,
      height: 10,
      backgroundColor: 'green',
      borderRadius: 5,
    },
})