import { AsyncStorage } from 'react-native';


deviceStorage = async () => {
    const { email, password, name, height, age, weight, typeofDiabetes } = this.state
  
    if (username.length == 0 || password.length == 0) {
      this.setState({
        errorMessage: 'Login and password is required.',
        loginProcessing: false,
      });
    } else {
      let loginResponse = await deviceStorage(email, password, name, height, age, weight, typeofDiabetes);
      if (loginResponse.status) {
          // if loginResponse = {token: "tokenValue"}
          userDetails = await getUser(loginResponse.token);
          console.log("User Details",userDetails)
      } else {
        this.setState({
          errorMessage: loginResponse.data,
          loginProcessing: false,
        });
      }
  
    }
}

export default deviceStorage;