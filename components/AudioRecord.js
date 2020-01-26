import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native';
import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import * as FileSystem from 'expo-file-system';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Overlay } from 'react-native-elements';
import { Button as LoadingButton } from 'react-native-elements';


class AudioRecord extends React.Component {
  constructor(props) {
    super(props)
    this.recording = null;
    this.song_uri = null;
    this.meal = null;
    this.state = {
      is_recording: false,
      hasPermission: null,
      isVisible: false,
      mealName: '',
      gL: '',
      calories: '',
      is_loading: false,
    }
  }

  storeMealLocally = async () => {
    this.props.updateCurrentMeal(this.meal)
    this.setState({ isVisible: false })
  }

  componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.AUDIO_RECORDING);
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: true,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
    });
    this.setState({ hasPermission: status === 'granted' });
  }

  stopAudio = () => {
    if (this.recording) {
      this.setState({ is_loading: true })
      this.recording.stopAndUnloadAsync().then(async status => {
        this.setState({ is_recording: false })
        let song_uri = this.recording.getURI()
        const base64_audio = await FileSystem.readAsStringAsync(song_uri, { encoding: FileSystem.EncodingType.Base64 })
        let audio_data = {
          method: 'POST',
          dataType: 'jsonp',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ base64: base64_audio })
        }
        fetch('http://172.17.72.207:3000/api/site_users/2/getFoodAudio', audio_data)
          .then(response => {
            if (response.status === 200) {
              response.json().then(response => {
                this.meal = response.result
                this.setState({
                  isVisible: true,
                  gL: response.result.gL,
                  mealName: response.result.mealName,
                  calories: `${response.result.totalCalories}kcal`,
                  is_loading: false
                })
              })
            } else {
              alert('Low quality audio, please try again')
            }
          })
          .catch(err => console.log(err))
      })
    }
  }

  createAudio = () => {
    this.recording = new Audio.Recording();
    try {
      this.recording.prepareToRecordAsync().then(status => {
        this.recording.startAsync().then(status => {
          this.setState({ is_recording: true })
        })
      })
    } catch (error) {

    }
  }

  render() {
    return (
      <>
        <Overlay isVisible={this.state.isVisible}>
          <View style={styles.overlay}>
            <Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 20, marginBottom: 40 }}>Below is the info from your record:</Text>
            <View style={styles.dynamicText}>
              <Text style={{ textAlign: 'left', fontWeight: '600', fontSize: 17, marginBottom: 30 }}>
                Recipe: {this.state.mealName}
              </Text>
              <Text style={{ textAlign: 'left', fontWeight: '600', fontSize: 17, marginBottom: 30 }}>
                Glycemic Load: {this.state.gL}
              </Text>
              <Text style={{ textAlign: 'left', fontWeight: '600', fontSize: 17, marginBottom: 30 }}>
                Calories: {this.state.calories}
              </Text>
            </View>
            <Text style={{ textAlign: 'center', fontWeight: '300', fontSize: 18, marginBottom: 40 }}>You can overwrite record by making another audio.</Text>
            <Button onPress={this.storeMealLocally} title="Got it" style={styles} />
          </View>
        </Overlay>
        {
          this.state.is_loading ?
            <LoadingButton type='clear' title='will load' loading={true} />
            :
            <Icon
              onPress={this.state.is_recording ? this.stopAudio : this.createAudio}
              name={this.state.is_recording ? 'square' : 'microphone'}
              size={40}
              color={this.state.is_recording ? 'red' : 'white'}
              style={styles.addmethodIcon}
            />
        }
      </>
    )
  }

}

const styles = StyleSheet.create({
  addmethodIcon: {
    position: 'relative',
    top: -5,
    left: -30,
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  overlay: {
    margin: 25,
    borderRadius: 20,
  },

})

export default AudioRecord;