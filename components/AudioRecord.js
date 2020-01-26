import React from 'react'
import { Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';
import * as Permissions from 'expo-permissions';
import base64 from 'base64-js'
import * as FileSystem from 'expo-file-system';


class AudioRecord extends React.Component {
  constructor(props) {
    super(props)
    this.recording = null;
    this.song_uri = null;
    this.state = {
      hasPermission: null
    }

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
      this.recording.stopAndUnloadAsync().then(async status => {
        let song_uri = this.recording.getURI()
        console.log(song_uri)
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
              response.json().then(response => console.log(response))
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

        })
      })
    } catch (error) {

    }
  }

  render() {
    return (
      <View>
        <Button title="Record Audio" onPress={this.createAudio} />
        <Button title="Stop Audio" onPress={this.stopAudio} />
      </View>
    )
  }

}

export default AudioRecord;