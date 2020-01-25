import React, { useEffect } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

function AudioRecord() {

  const createAudio = async () => {
    console.log('hello world')
    const recording = new Audio.Recording();
    try {
      await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      audio = recording.startAsync();
      setTimeout(() => {
        audio.stopAndUnloadAsync()
        audio.then(data => {
          console.log(data)
        })
      }, 3000)
      console.log(audio)
    } catch (error) {

    }
  }

  return (
    <View onPress={createAudio}>
      <TouchableOpacity onPress={createAudio}>
        <Text>Record Audio</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AudioRecord;