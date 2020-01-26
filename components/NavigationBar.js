import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const NAV_ITEM_COLOR = 'rgba(255, 255, 255, 0.6)'
const WHITE = 'white'

function NavigationBar(props) {
    return (
        <View style={styles.navContainer}>
            <TouchableOpacity onPress={() => props.updateScreenIndex(4)} style={styles.navItem}>
                <View style={styles.navItemIcon} >
                    <Icon name='alpha-a-box' color={props.currentTab === 4 ? WHITE : NAV_ITEM_COLOR} size={24} />
                </View>
                <Text style={styles.navItemText}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.updateScreenIndex(0)} style={styles.navItem}>
                <View style={styles.navItemIcon}>
                    <Icon name='food-apple' color={props.currentTab === 0 ? WHITE : NAV_ITEM_COLOR} size={24} />
                </View>
                <Text style={styles.navItemText}>Meals</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={props.logout} style={styles.navItem}>
                <View style={styles.navItemIcon}>
                    <Icon name='logout' color={NAV_ITEM_COLOR} size={24} />
                </View>
                <Text style={styles.navItemText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        padding: 20,
        flexDirection: 'row',
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: 'rgba(255,255,255,0.2)',
        borderStyle: 'solid',
        backgroundColor: '#673ab7'
    },
    navItem: {
        display: 'flex',
        flexDirection: 'column',

    },
    navItemText: {
        color: NAV_ITEM_COLOR,
        position: 'relative',
        left: -10,
        top: -5,
        fontWeight: '700'
    },
    navItemIcon: {
        position: 'relative',
        top: -10
    }

})

export default NavigationBar;