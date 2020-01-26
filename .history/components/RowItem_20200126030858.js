import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {StyleSheet} from 'react-native';
import { black } from 'react-native-paper/src/styles/colors';


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

  render(){
    if (this.state.GLindex>=18){
            
    }
return(

        <View style={styles.row}>
        <Text style={styles.text}>Meal X</Text>
        <Text style={styles.text2}>jskjksj</Text>
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
          fontSize: 22,
    fontWeight: '200',
      marginLeft: 10, 
      },
      text2:{
        fontSize: 22,
        fontWeight: '200',
        marginLeft: 170,
    },
})