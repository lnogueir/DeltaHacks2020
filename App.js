import React from 'react';
import CameraScreen from './components/CameraScreen';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/LoginPage';
import Home from './components/Home';
import { AsyncStorage, View } from 'react-native';


const SCREENS_MAP = [
  Home, CameraScreen, CreateAccount, LoginPage
]

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      screen_index: 0,
      isLoading: true,
      user: null
    }
  }

  updateScreenIndex = index => {
    this.setState({ screen_index: index })
  }

  componentDidMount = async () => {
    await AsyncStorage.getItem('user').then(data => {
      this.setState({
        screen_index: data != null ? 0 : 3,
        user: data,
        isLoading: false,
      })
    });
  }

  render() {
    const CurrentScreen = this.state.isLoading ? View : SCREENS_MAP[this.state.screen_index]
    return (
      <CurrentScreen updateScreenIndex={this.updateScreenIndex} />
    );
  }
}

export default App;