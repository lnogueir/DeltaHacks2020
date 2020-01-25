import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

function BackRow(props) {
    return (
        <View style={styles.head_container}>
            <TouchableOpacity onPress={props.back}>
                <Text style={styles.back_text}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    head_container: { padding: 15, backgroundColor: '#eeeeee', justifyContent: 'flex-start' },
    back_text: { fontSize: 18, position: 'relative', top: 10 }
});



export default BackRow;