import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import BackRow from './BackRow'


class CreateAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            weight: ''
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <BackRow back={this.props.back} />
                <View style={styles.input_container}>
                    <Text>Create Account</Text>
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => this.setState({ username: text })}
                        value={this.username}
                    />
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => this.setState({ password: text })}
                        value={this.password}
                    />
                    <TextInput
                        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={text => this.setState({ weight: text })}
                        value={this.weight}
                    />
                    <Text>Create Account!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input_container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});


export default CreateAccount;