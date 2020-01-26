import React from 'react';
import CameraScreen from './components/CameraScreen';
import CreateAccount from './components/CreateAccount';
import LoginPage from './components/LoginPage';
import AboutUs from './components/AboutUs';
import AddMeal from './components/AddMeal';
import Home from './components/Home';
import NavigationBar from './components/NavigationBar';
import { AsyncStorage, View } from 'react-native';


const SCREENS_MAP = [
  Home, CameraScreen, CreateAccount, LoginPage, AboutUs, AddMeal
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

  updateUser = user => {
    this.setState({ user: user })
  }


  logout = async () => {
    await AsyncStorage.clear()
    this.updateScreenIndex(3)
    this.setState({ user: null })
  }


  componentDidMount = async () => {
    await AsyncStorage.getItem('user').then(data => {
      this.setState({
        screen_index: data != null ? 0 : 3,
        user: JSON.parse(data),
        isLoading: false,
      })
    });
  }

  render() {
    const CurrentScreen = this.state.isLoading ? View : SCREENS_MAP[this.state.screen_index]
    return (
      <>
        <CurrentScreen user={this.state.user} updateUser={this.updateUser} updateScreenIndex={this.updateScreenIndex} />
        {
          1 !== this.state.screen_index && this.state.user ?
            <NavigationBar currentTab={this.state.screen_index} logout={this.logout} updateScreenIndex={this.updateScreenIndex} />
            : null
        }
      </>
    );
  }
}

export default App;