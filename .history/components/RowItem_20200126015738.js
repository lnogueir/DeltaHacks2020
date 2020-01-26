import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {StyleSheet} from 'react-native';


export default class TaskPage extends Component {
  render(){
return(

        <View style={styles.row}>
        <Text style={styles.text}>kskjs</Text>
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
        justifyContent: 'center',
      },
      text:{
          fontSize: 25,
    fontWeight: '200',
      marginLeft: 10, 
      },
})