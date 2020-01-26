import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { StyleSheet,Button, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


const {width: WIDTH} = Dimensions.get('window')
export default class UserInputs extends Component {
    render(){
        return(
            <ImageBackground source= {require('../../img/sampleBackground1.jpg')}style={styles.backgroundContainer}>
            
         <Text style={styles.header}>Your Information</Text>
         
         <View>
       <Icon 
       name = 'pluscircle'
       size = {30}
       onPress={() => }
       />
        </View>
        

        <TouchableOpacity style={styles.buttonLogin}>
          <Text style={styles.text}>Submit</Text>
           </TouchableOpacity>
        </ImageBackground>
        )
    }
}



const styles = StyleSheet.create({

    header:
    {
color:'white',
fontSize: 26,
textAlign: 'center',
fontWeight: "300",
marginBottom: 30,
    },
  
      input: {
          width: WIDTH - 175, 
        height: 45, 
        borderRadius: 25,
        fontSize: 16, 
        fontWeight: "200",
        paddingLeft: 20,
        backgroundColor: 'rgba(0, 0, 0, .35)',
        color: 'rgba(255, 255, 255, 1)', 
        marginHorizontal: 25,
        marginTop: 10,
        marginBottom: 10,
      },
      backgroundContainer: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        width: null,
        height: null,
        //optional
        justifyContent: 'center',
        alignItems: 'center',
      },
     buttonLogin:{
           justifyContent: 'center',
           marginTop: 40,
           width: WIDTH - 300, 
           height: 45, 
           borderRadius: 25,
           fontSize: 18, 
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
        fontWeight: "200",
      }

})

