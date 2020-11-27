import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Screen from './app/screens/Screen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import LoginScreen from './app/screens/LoginScreen'
import AccountScreen from './app/screens/AccountScreen'
import AuthkNavigator from "./app/navigation/AuthNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AnimatedLoginScreen from './app/screens/AnimatedLoginScreen'



const Link = () => {

  const navigation = useNavigation()
  return (
    <Screen>
      <Button
        title="do szczegółów"
        onPress={() => navigation.navigate('TweetDetail', { id: 222 })}
      />
    </Screen>
  )
}

const Tweet = ({ navigation }) => (
  <Screen>
    <Text>To jest Tweet</Text>
    <Button
      title="Zobacz Tweeta"
      onPress={() => navigation.navigate("TweetDetail", { id: 111 })}
    />
    <Link />
  </Screen>
)

const ooo = () => {
  <Screen>
    <Text>To jest prawdziwy Szajz</Text>
  </Screen>
}

const TweetDetail = ({ navigation, route }) => (
  <Screen>
    <Text>To są detale wiadomości</Text>
    <Text>{route.params.id}</Text>
    <Button
      title="powrót"
      onPress={() => navigation.navigate("Tweet")}
    />
  </Screen>
)

const Account = () => (
  <Screen>
    <Text> To Jest Okno Account </Text>
  </Screen>
)

// _____________________
const Stack = createStackNavigator()
const FeedNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      title: 'Strona główna',
      headerStyle: { backgroundColor: 'dodgerblue' },
    }}
  >
    <Stack.Screen
      name="Tweet"
      component={Tweet}
      options={{
        title: 'Strona główna',
        headerStyle: { backgroundColor: 'red' },
      }}
    />
    <Stack.Screen
      name="TweetDetail"
      component={TweetDetail}
      options={({ route }) => ({ title: route.params.id })}
    />
    <Stack.Screen name="Gówno" component={ooo} />
  </Stack.Navigator>
)
// ______________________________
const Tab = createBottomTabNavigator()
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: 'tomato',
      activeTintColor: 'white',
      inactiveBackgroundColor: 'dodgerblue',
      inactiveTintColor: 'white',

    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({ size, color }) => <MaterialCommunityIcons
          name="home"
          size={size}
          color={color}

        />
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
)

// __________________________________________________________________


export default function App() {

  return (
    <>
      <View>
        <AnimatedLoginScreen/>
      </View>
    </>

  );
}

const styles = StyleSheet.create({

})
