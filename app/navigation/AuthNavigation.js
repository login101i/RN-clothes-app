
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import WelcomeScreen from '../../app/screens/WelcomeScreen'
import LoginScreen from '../../app/screens/LoginScreen'
import AccountScreen from '../../app/screens/AccountScreen'



const Stack=createStackNavigator()

const AuthkNavigator=()=>(
    <Stack.Navigator>
        <Stack.Screen 
        name="Welcome"
         component={WelcomeScreen} 
         options={{headerShown:false}}
         />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
)

export default AuthkNavigator

