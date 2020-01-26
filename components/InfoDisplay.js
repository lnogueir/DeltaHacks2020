import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { StyleSheet, Button } from 'react-native';


function InfoDisplay(props) {
    const check_for_load = () => {
        const gload = parseInt(props.meal.gl)
        return gload < 17 ? 'GOOD' : gload < 29 ? 'MEDIUM' : 'BAD'
    }

    return (
        <View style={styles.mainContainer}>
            {props.meal &&
                <View style={styles.row}>
                    <Text style={styles.text}>{props.meal.meal_name}</Text>
                    <View style={{ position: 'relative', top: -35 }}>
                        {
                            props.meal.food_name &&
                            <Text style={styles.info}>Recipe: {props.meal.food_name}</Text>
                        }
                        {props.meal.gl &&
                            <Text style={styles.info}>GL Coeficient: {props.meal.gl}</Text>
                        }
                        {
                            props.meal.calories &&
                            <Text style={styles.info}>Calories: {props.meal.calories}kcal</Text>
                        }
                        {
                            props.meal.carbs &&
                            <Text style={styles.info}>Carbs: {props.meal.carbs}g</Text>
                        }
                        {
                            props.meal.sugar &&
                            <Text style={styles.info}>Sugar: {props.meal.sugar} g</Text>
                        }
                        <Text>Status: {check_for_load()}</Text>
                        <View style={{ position: 'relative', top: 15, marginTop: 10 }}>
                            <Button onPress={props.turnOffVisibility} title="Got it!" />
                        </View>
                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        resizeMode: 'cover',
        width: null,
        height: null,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: "center",
    },

    text: {
        marginTop: 30,
        fontSize: 60,
        fontWeight: '300',
        marginBottom: 50,
    },

    info: {
        marginBottom: 25,
        fontSize: 20,
        fontWeight: '200',
    },
    imagesDisplay: {
        display: 'flex',
    },
})

export default InfoDisplay