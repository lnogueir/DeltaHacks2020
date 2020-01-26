import React from 'react';
import { Text, View } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


function RowItem(props) {
    const check_for_load = () => {
        const gload = parseInt(props.gL)
        return gload < 17 ? 'GOOD' : gload < 29 ? 'MEDIUM' : 'BAD'
    }

    const handleDelete = () => {
        fetch(`http://172.17.72.207:3000/api/profiles/${props.profile_id}/foodAddeds/${props.meal_id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.status === 204) {
                let dummy_meals = props.meals;
                dummy_meals = dummy_meals.filter(elem => elem.id != props.meal_id)
                props.updateMeals(dummy_meals)
            }
        })
    }
    return (

        <View style={styles.row}>
            <Icon
                onPress={handleDelete}
                style={{ marginLeft: 10 }}
                name='minus-circle-outline'
                size={30} />
            {
                props.mealName !== '' ?
                    <Text style={styles.text}>{props.mealName}</Text>
                    :
                    <Text style={styles.text}>{props.foodName}</Text>
            }
            <View style={styles.rightContent}>
                <View style={styles.displayIndex}>
                    <Text style={styles.text2}>Glycemic{'\n'}Load: {props.gL}</Text>
                </View>

                <View style={styles.displayDots}>
                    {check_for_load() === 'BAD' &&
                        <View style={[styles.red, styles.growBall]}></View>
                    }
                    {check_for_load() === 'MEDIUM' &&
                        <View style={[styles.yellow, styles.growBall]}></View>
                    }
                    {check_for_load() === 'GOOD' &&
                        <View style={[styles.green, styles.growBall]}></View>
                    }
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        marginTop: 30,
        borderRadius: 15,
        width: 300,
        height: 100,
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        alignItems: "center",

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    text: {
        fontSize: 16,
        fontWeight: '200',
        marginLeft: 10,
    },
    rightContent: {
        display: "flex",
        position: 'absolute',
        flexDirection: 'row',
        marginLeft: 95
    },
    displayIndex: {
        display: "flex",
        flexDirection: "column",
        marginRight: 20,
    },
    displayDots: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    text2: {
        fontSize: 16,
        fontWeight: '200',
        marginLeft: 75,
    },
    red: {
        width: 10,
        height: 10,
        backgroundColor: 'red',
        borderRadius: 5,
    },
    yellow: {
        width: 10,
        height: 10,
        backgroundColor: 'yellow',
        borderRadius: 5,
    },
    green: {
        width: 10,
        height: 10,
        backgroundColor: 'green',
        borderRadius: 5,
    },
    growBall: {
        height: 17.5,
        width: 17.5,
        borderRadius: 10,
        position: 'relative',
        top: 12
    }
})

export default RowItem;