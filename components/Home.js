import React from 'react'
import AudioRecord from './AudioRecord'
import { StyleSheet, View, Button } from 'react-native';
import { AsyncStorage } from 'react-native';

function Home(props) {

    const logout = async () => {
        await AsyncStorage.clear()
        props.updateScreenIndex(3)
    }

    return (
        <View style={styles.container}>
            <Button title="Open Camera" onPress={() => props.updateScreenIndex(1)} />
            <Button title="Create Account" onPress={() => props.updateScreenIndex(2)} />
            <AudioRecord />
            <Button title="Log out" onPress={logout} />
        </View>
    )
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


export default Home