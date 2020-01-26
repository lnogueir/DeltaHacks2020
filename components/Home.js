import React from 'react';
import { Text, View, Dimensions, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import imgB from '../assets/sample1.jpg';
import Icon from 'react-native-vector-icons/AntDesign';
import RowItem from './RowItem';
import InfoDisplay from './InfoDisplay'
import { Overlay } from 'react-native-elements';

const { width: WIDTH } = Dimensions.get('window')
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: [],
            isVisible: false,
            selected_meal: null
        }
    }

    getMeals = () => {
        fetch(`http://172.17.72.207:3000/api/profiles/${this.props.user.profileId}/foodAddeds`)
            .then(response => {
                if (response.status === 200) {
                    response.json().then(meals => {
                        this.setState({ meals: meals })
                    })
                }
            })
    }

    componentDidMount = () => {
        this.getMeals()
    }

    handleMealClick = meal => {
        this.setState({ isVisible: true, selected_meal: meal })
    }


    render() {
        return (
            <>
                <Overlay isVisible={this.state.isVisible}>
                    <InfoDisplay
                        turnOffVisibility={() => this.setState({ isVisible: false })}
                        meal={this.state.selected_meal}
                    />
                </Overlay>
                <ImageBackground source={imgB} style={styles.backgroundContainer}>
                    <View style={[styles.mainContainer, { position: 'relative', top: -100 }]}>
                        <View style={{ position: 'relative', top: -30 }}>
                            <Text style={styles.name}>
                                Welcome,
                            </Text>
                            <Text style={styles.aboutText}>
                                {this.props.user.name}!
                            </Text>
                        </View>
                        <SafeAreaView style={{ flex: 1 }}>
                            <ScrollView style={styles.scrollView}>
                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                    <TouchableOpacity
                                        onPress={() => this.props.updateScreenIndex(5)}
                                        style={styles.row}
                                    >
                                        <Icon
                                            style={styles.icon}
                                            name='pluscircle'
                                            size={30}
                                        />
                                        <Text style={styles.buttonText}>Add a meal</Text>
                                    </TouchableOpacity>
                                    {this.state.meals.map((meal, i) => {
                                        return (
                                            <TouchableOpacity onPress={() => this.handleMealClick(meal)} key={i}>
                                                <RowItem
                                                    meals={this.state.meals}
                                                    updateMeals={meals => this.setState({ meals: meals })}
                                                    meal_id={meal.id}
                                                    profile_id={meal.profile_id}
                                                    mealName={meal.meal_name}
                                                    foodName={meal.food_name}
                                                    gL={meal.gl}
                                                />
                                            </TouchableOpacity>
                                        )
                                    })}
                                </View>
                            </ScrollView>
                        </SafeAreaView>
                    </View>
                </ImageBackground >
            </>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        marginTop: 30,
        borderRadius: 15,
        width: 300,
        height: 60,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",
    },
    buttonText: {
        marginLeft: 59,
        fontWeight: '200',
        fontSize: 20,
    },
    icon: {
        marginLeft: 10,
    },
    name: {
        fontSize: 50,
        fontWeight: "200",
        color: "white",
        textAlign: "left",
        marginTop: 200,
    },
    rowItems: {
        display: 'flex',
        color: 'white',
        flexDirection: "row",
    },
    aboutText: {
        color: 'white',
        width: 300,
        fontSize: 25,
        position: 'relative',
        left: 10,
        fontWeight: '900',
        lineHeight: 25,
        textAlign: "left",
    },
    imagesDisplay: {
        display: 'flex',
    },
    g1: {
        flex: 1,
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },

})

export default Home