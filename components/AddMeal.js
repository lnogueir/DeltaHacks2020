import React from 'react';
import {
    Text, View, Dimensions,
    StyleSheet,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    AsyncStorage
}
    from 'react-native';
import BackRow from './BackRow';
import imgB from '../assets/sampleBackground1.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AudioRecord from './AudioRecord'
import { Button } from 'react-native-elements'


const { width: WIDTH } = Dimensions.get('window')

class AddMeal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current_meal: null,
            meal_name: '',
            recipe: '',
            is_loading: false
        }
    }

    componentDidMount = async () => {
        if (this.state.current_meal) { }
        else {
            let current_meal = await AsyncStorage.getItem('meal')
            if (current_meal) {
                current_meal = JSON.parse(current_meal)
                this.setState({ current_meal: current_meal })
            }
        }
    }

    updateCurrentMeal = meal => {
        this.setState({ current_meal: meal })
    }

    componentWillUnmount = async () => {
        await AsyncStorage.removeItem('meal')
    }

    createMeal = async () => {
        if (this.state.current_meal == null && this.state.recipe == '') {
            alert('Please provide a meal')
            return
        }
        this.setState({ is_loading: true })
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        if (this.state.recipe !== '' && this.state.recipe) {
            let query = {
                query: this.state.recipe,
                mealName: this.state.meal_name,
                profile_id: user.profileId
            }
            fetch(`http://172.17.72.207:3000/api/site_users/${user.userId}/manuallyGetFood`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(query)
            }).then(response => {
                if (response.status === 200) {
                    this.setState({ is_loading: false })
                    this.props.updateScreenIndex(0)
                }
            })
        } else {
            let data = {
                profile_id: this.props.user.profileId,
                calories: this.state.current_meal.totalCalories,
                sugar: this.state.current_meal.totalSugar,
                food_name: this.state.current_meal.mealName,
                gl: this.state.current_meal.gL,
                meal_name: this.state.meal_name
            }
            fetch(`http://172.17.72.207:3000/api/profiles/${this.props.user.profileId}/foodAddeds`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(response => {
                if (response.status === 200) {
                    this.props.updateScreenIndex(0)
                }
            })
        }
    }

    render() {
        return (
            <>
                <BackRow back={() => this.props.updateScreenIndex(0)} />
                <ImageBackground style={styles.backgroundContainer} source={imgB}>
                    <View style={styles.mainContainer}>
                        <Text style={styles.name}>Create a meal:</Text>
                        <View style={[styles.inputContainer, { marginTop: 7 }]}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Enter meal name'}
                                placeholderTextColor={'lightgray'}
                                onChangeText={text => this.setState({ meal_name: text })}
                            />
                        </View>
                        <Text style={styles.enterFood}>Enter food:</Text>
                        <View style={[styles.inputContainer, { marginTop: 5 }]}>
                            <TextInput
                                style={styles.input}
                                placeholder={'1 banana and 1oz milk'}
                                placeholderTextColor={'lightgray'}
                                onChangeText={text => this.setState({ recipe: text })}
                            />
                        </View>
                        <Text style={styles.or}>Or</Text>
                        <View style={styles.addmethod}>
                            <Text style={styles.addmethodText}>Take a photo of your meal</Text>
                            <Icon onPress={() => this.props.updateScreenIndex(1)} name={'camera'} size={40} color={'white'} style={styles.addmethodIcon} />
                        </View>
                        <View style={styles.addmethod2}>
                            <Text style={styles.addmethodText}>Record audio of your meal </Text>
                            <AudioRecord updateCurrentMeal={this.updateCurrentMeal} />
                        </View>
                        {
                            this.state.current_meal != null &&
                            <View style={{ position: 'relative', top: 12 }}>
                                <Text style={styles.or}>Meal Recipe Selected: {this.state.current_meal.mealName}</Text>
                            </View>
                        }
                        {
                            this.state.is_loading ?
                                <Button type='clear' title='will load' loading={true} />
                                :
                                <TouchableOpacity onPress={this.createMeal} style={styles.buttonCreateAccount}>
                                    <Text style={styles.textCreateAccount}>Create Meal</Text>
                                </TouchableOpacity>
                        }
                    </View>
                </ImageBackground>
            </>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        paddingTop: 65,
        resizeMode: 'cover',
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    enterFood: {
        fontWeight: '700',
        textAlign: 'center',
        color: 'white',
        margin: 15,
        fontSize: 18
    },
    or: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '700',
        fontSize: 18,
        marginTop: 7,
        marginBottom: 0
    },
    addmethod: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        position: 'relative',
        left: 17,
        margin: 5
    },
    addmethod2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flex: 1,
        top: -50,
        position: 'relative',
        left: 17,
        margin: 5
    },
    addmethodText: {
        color: 'white',
        fontWeight: '900',
        position: 'relative',
        top: 10
    },
    addmethodIcon: {
        position: 'relative',
        top: -5,
        left: -30,
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    name: {
        fontSize: 50,
        fontWeight: "200",
        color: "white",
        textAlign: "center",
    },
    mainContainer: {
        marginBottom: 50,
    },
    logo: {
        width: 120,
        height: 120,
        position: 'relative',
        top: 50
    },
    logoContainer: {
        marginBottom: 60,
        alignItems: 'center',
    },
    logoText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '200',
        marginTop: 10,
    },
    inputContainer: {
        marginTop: 25,
        marginBottom: 10,
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 25,
        backgroundColor: 'rgba(0, 0, 0, .35)',
        color: 'rgba(255, 255, 255, 1)',
        marginHorizontal: 25,
    },
    buttonEye: {
        position: 'absolute',
        top: 8,
        right: 37,
    },
    buttonLogin: {
        justifyContent: 'center',
        marginTop: 10,
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 4,
        backgroundColor: 'rgba(0, 0, 0, .3)',
        color: 'rgba(255, 255, 255, 1)',
        marginHorizontal: 25,
        textAlign: "center",
    },
    buttonCreateAccount: {
        justifyContent: 'center',
        width: WIDTH - 55,
        height: 45,
        position: 'relative',
        top: -80,
        borderRadius: 25,
        fontSize: 16,
        paddingLeft: 4,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 25,
        textAlign: "center",
    },
    text: {
        color: 'rgba(255, 255, 255, 1)',
        textAlign: "center",
        fontSize: 15,
        fontWeight: "400",
    },
    textCreateAccount: {
        color: 'rgba(0,0,0, .7)',
        textAlign: "center",
        fontSize: 15,
        fontWeight: "900",
    },

})

export default AddMeal;
