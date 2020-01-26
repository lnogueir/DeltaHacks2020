import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import BackRow from './BackRow'


class CreateAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name: '',
            height: '',
            age:'',
            weight:'',
            typeOfDiabetes:'',
            error: '',
            loading: false
        }
    }

    sendingLoginData = (username, password) => 
    {
    console.log("Fuck off nigga!")
    const details =
    {
         username: username,
         password: password,
     };
     

      return fetch('http://172.17.72.207:3000/api/site_users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
    
            body:JSON.stringify(details)
        }).then(response => {
            if(response.status === 200){
               return response.json().then(response => console.log(response))
            } else {
                return {status: false, data:"Invalid username or password." }
            }
        })
        .catch(error =>console.log(error))
    }
 
/*sendingLoginData() 
{
    console.log("Hiii Arsh");
  const {email, password} = this.state;

  this.setState({ error: '', loading: true });
  
  // NOTE HTTP is insecure, only post to HTTPS in production apps
  

  fetch()
  axios.post("http://172.17.72.207:3000/api/site_users/login",
  {
   body:  
    {
      email: email,
      password: password
    }

  },)
  .then((response) => 
  {
     // Handle the JWT response here
     console.log(response);
  })
  .catch((error) => 
  {
     // Handle returned errors here
     console.log("Error caught: "+ error.message);
  });
}*/


sendingUserData = (name, height, weight, age, typeOfDiabetes) => 
{
    console.log("Fuck off nigga!")
    const userDetails =
    {
         name:name,
         height:height,
         weight:weight,
         age:age,
         typeOfDiabetes:typeOfDiabetes
     };

      return fetch('http://172.17.72.207:3000/api/site_users/user_input', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
    
            body:JSON.stringify(userDetails)
        }).then(response => {
            if(response.status === 200){
               return response.json().then(response => console.log(response))
            } else {
                return {status: false, data:"Invalid username or password." }
            }
        })
        .catch(error =>console.log(error))
    }



    render() {
        return (
            <View style={styles.container}>
                <BackRow back={this.props.back} />
                <View style={styles.input_container}>
                    <Text>Create Account</Text>
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => this.setState({ username: text })}
                        value={this.username}
                    />
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.password}
                    />
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => this.setState({ weight: text })}
                        value={this.weight}
                    />
                     {!this.state.loading ?
            <Text onPress={this.sendingLoginData}>Submit</Text>
            :
            <Loading size={'large'} />
          }
                   
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input_container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default CreateAccount;
