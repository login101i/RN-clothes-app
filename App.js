import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Image, Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer, useNavigation } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AppLoading } from 'expo'

import Screen from './app/screens/Screen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import LoginScreen from './app/screens/LoginScreen'
import AccountScreen from './app/screens/AccountScreen'
import AuthkNavigator from "./app/navigation/AuthNavigation";
import navigationTheme from "./app/navigation/navigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import AnimatedLoginScreen from './app/screens/AnimatedLoginScreen'
import OfflineNotice from './app/components/OfflineNotice'
import AuthContext from "./app/auth/context";
import authStorage from './app/auth/storage'






export default function App() {
  const [user, setUser] = React.useState()
  const [isReady, setIsReady] = useState(false)
  console.log(user)

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user)
    
  }

  // useEffect(() => {
  //   restoreToken()
  // }, [])

  if (!isReady) return <AppLoading
    startAsync={restoreUser}
    onFinish={() => setIsReady(true)}
  />

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <Screen>
        <OfflineNotice />
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthkNavigator />}
        </NavigationContainer>
      </Screen>
    </AuthContext.Provider>

  );
}

const styles = StyleSheet.create({

})
