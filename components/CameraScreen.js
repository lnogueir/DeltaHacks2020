import React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import BackRow from './BackRow'
class CameraScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasPermission: null,
            type: Camera.Constants.Type.back,
            photo64: null,
            photo: null
        }
    }

    snap = async () => {
        if (this.camera) {
            this.camera.takePictureAsync({ base64: true })
                .then((data) => {
                    let image_data = {
                        method: 'POST',
                        dataType: 'jsonp',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ base64: data.base64 })
                    }
                    fetch('http://172.17.72.207:3000/api/site_users/2/getFood', image_data)
                        .then(response => {
                            if (response.status === 200) {

                                response.json().then(response => console.log(response))
                            }
                        })
                        .catch(err => console.log(err))
                })
        }
    }

    componentDidMount = async () => {
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({ hasPermission: status === 'granted' });

    }

    render() {
        if (this.state.hasPermission === null) {
            return <View />;
        }
        if (this.state.hasPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <View style={{ flex: 1 }}>
                <BackRow back={this.props.back} />
                <Camera style={{ flex: 1 }} type={this.state.type} ref={ref => this.camera = ref}>
                    <View
                        style={{
                            flex: 1,
                            position: 'absolute',
                            bottom: 1,
                            justifyContent: 'center',
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                this.setState({
                                    type: (this.state.type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back)
                                });
                            }}>
                            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.snap}>
                            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Snap! </Text>
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        );
    }
}

export default CameraScreen;