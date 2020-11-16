import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ListingScreen from '../screens/ListingScreen'
import ListingEditScreen from '../screens/ListingEditScreen'
import AccountScreen from '../screens/AccountScreen'
import FeedNavigator from './FeedNavigator'
import AccountNavigator from './AccountNavigator'


const Tab = createBottomTabNavigator()
const AppNavigator = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeBackgroundColor: 'tomato',
            activeTintColor: 'white',
            inactiveBackgroundColor: 'dodgerblue',
            inactiveTintColor: 'white',
        }}
    >
        <Tab.Screen name="Feed" component={FeedNavigator} />
        <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
        <Tab.Screen name="Account" component={AccountNavigator} />
    </Tab.Navigator>
)

export default AppNavigator