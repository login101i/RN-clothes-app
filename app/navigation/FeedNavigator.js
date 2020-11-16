import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListingsDetailScreen from '../components/ListingDetailScreen'
import ListingScreen from '../screens/ListingScreen'


const Stack = createStackNavigator()

const FeedNavigator = () => (
    <Stack.Navigator
    // mode="modal"   Modal nie działa tzn przesuanie palcem 
    >
        <Stack.Screen name="Listings" component={ListingScreen} />
        <Stack.Screen
         name="ListingDetails"
         component={ListingsDetailScreen} 
         options={{
            //  headerShown:false
         }}
         />
    </Stack.Navigator>
)


export default FeedNavigator
