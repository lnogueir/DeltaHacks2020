import React from 'react';
import CameraScreen from './components/CameraScreen';
import CreateAccount from './components/CreateAccount'
// import AudioRecord from './components/AudioRecord'
import { StyleSheet, Text, View, Button } from 'react-native';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      camera_mode: false,
      create_account_screen: false
    }
  }
  render() {
    return (
      this.state.camera_mode ?
        <CameraScreen back={() => this.setState({ camera_mode: false })} /> :
        this.state.create_account_screen ?

          <CreateAccount back={() => this.setState({ create_account_screen: false })} />
          :

          <View style={styles.container}>
            <Button title="Open Camera" onPress={() => this.setState({ camera_mode: true })} />
            <Button title="Create Account" onPress={() => this.setState({ create_account_screen: true })} />
            {/* <View style={{ marginTop: 20 }}>
              <AudioRecord />
            </View> */}
          </View>

    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  }
});

export default App;