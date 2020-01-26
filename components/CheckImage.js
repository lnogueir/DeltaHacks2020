import React from 'react'
import { Image, Text, View, Button, AsyncStorage } from 'react-native'


function CheckImage(props) {

    const storeMealLocally = async meal => {
        await AsyncStorage.setItem('meal', JSON.stringify(meal))
        props.updateScreenIndex(5)
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontWeight: '700', color: 'rgba(255,255,255, .75)', fontSize: 18 }}>
                Confirm meal:
            </Text>
            <Text>
                Meal: {props.image_data.mealName},
                Glycemic Load: {props.image_data.gL},
                Calories: {props.image_data.totalCalories}
            </Text>
            <Image
                style={{ borderRadius: 8, width: 175, height: 325, marginTop: 30 }}
                source={{ uri: props.photo_uri }}
            />
            <Button onPress={() => props.updatePhoto(null)} style={{ margin: 50 }} title='Retake' />
            <Button onPress={() => storeMealLocally(props.image_data)} style={{ margin: 50 }} title='Continue' />
        </View>
    )
}


export default CheckImage