import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailScreen from './app/screens/YYY'
import XXX from './app/screens/ListingItemDetails'
import MessageScreen from './app/screens/MessageScreen'
import Screen from './app/components/Screen'
import Icon from './app/components/Icon'
import ListItem from './app/components/ListItem'
import AccountScreen from './app/screens/AccountScreen';
import ListingScreen from './app/screens/ListingScreen'



export default function App() {
  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingDetailScreen/> */}
      {/* <MessageScreen/> */}
      {/* <Screen>
        <ListItem
          title="my title"
          // subTitle="lololo"
          ImageComponent={<Icon
            name='email'
            size={50}
            backgroundColor="red"
            iconColor="white"
          />}
        />

      </Screen> */}
      {/* <AccountScreen/> */}
      <ListingScreen/>


    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
})

