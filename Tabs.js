import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import colors from './styles/colors.js'
import HomeScreen from './screens/HomeScreen.js';
import { Icon } from 'react-native-elements';

const Tab=createBottomTabNavigator();
const Tabs = () => {
    const options={
        showLabel: false,
    style: {
        height: 90,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,

        elevation: 21,
    },
    }
  return (
    <Tab.Navigator
    tabBarOptions= {options}
    screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
            const tintColor = focused ? colors.primary : colors.gray
            switch(route.name){
                case 'Home':
                    return <Icon name="home" type='entypo' size={35} color={tintColor} />
                case 'Search':
                    return <Icon name="search" type='feather' size={35} color={tintColor}/>
                case 'Booking':
                    return <Icon name="bookmark" type='fontawesome' size={35} color={tintColor}/>
                case 'Profile':
                    return <Icon name="user" type='entypo' size={35} color={tintColor}/>
            }
        }
    })}
    >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="Booking" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({})