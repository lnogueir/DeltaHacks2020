import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';

function BackRow(props) {
    return (
        <View style={styles.head_container}>
            <TouchableOpacity style={styles.stylebut} onPress={props.back}>
                <AntIcon name="back" size={30} color={'black'} />
                <Text style={styles.back_text}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    head_container: { padding: 10, backgroundColor: '#eeeeee', justifyContent: 'flex-start' },
    back_text: { fontSize: 18, position: 'relative', top: 10, left: 6 },
    stylebut: { flexDirection: 'row', display: 'flex' }
});



export default BackRow;