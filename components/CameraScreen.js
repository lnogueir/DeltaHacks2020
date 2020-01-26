import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import BackRow from './BackRow';
import CheckImage from './CheckImage';
import { Button } from 'react-native-elements';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
class CameraScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasPermission: null,
            type: Camera.Constants.Type.back,
            photo64: null,
            photo: null,
            is_loading: false,
            is_check: false,
            image_data: null
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
                    this.setState({ is_loading: true })
                    fetch('http://172.17.72.207:3000/api/site_users/2/getFood', image_data)
                        .then(response => {
                            if (response.status === 200) {
                                response.json().then(response => {
                                    this.setState({ is_loading: false, photo: data.uri, image_data: response.result })
                                })
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

    updatePhoto = photo => {
        this.setState({ photo: photo })
    }

    render() {
        if (this.state.is_loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button type='clear' title='will load' loading={true} />
                </View>
            )
        }
        if (this.state.hasPermission === null) {
            return <View />;
        }
        if (this.state.hasPermission === false) {
            return <Text>No access to camera</Text>;
        }
        if (this.state.photo) {
            return (
                <CheckImage
                    updatePhoto={this.updatePhoto}
                    updateScreenIndex={this.props.updateScreenIndex}
                    photo_uri={this.state.photo}
                    image_data={this.state.image_data}
                />
            )
        }
        return (
            <View style={{ flex: 1 }}>
                <BackRow back={() => this.props.updateScreenIndex(5)} />
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
                            <AntIcon style={{ position: 'relative', left: 10 }} name="retweet" size={40} color={'white'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.snap}>
                            <Icon style={{ position: 'relative', left: 15 }} name={'camera'} size={40} color={'white'} />
                        </TouchableOpacity>
                    </View>
                </Camera>
            </View>
        );
    }
}

export default CameraScreen;