import React from "react";

import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewImageScreen from './app/screens/ViewImageScreen'
import { View, StyleSheet, Text, Image } from 'react-native'
import { ScrollView } from "react-native-gesture-handler";


import colors from './app/config/colors'

import Card from './app/components/Card'
import ListingDetailScreen from './app/components/ListingDetailScreen'
import MessagesScreen from './app/screens/MessagesScreen'
import Screen from './app/screens/Screen'
import Icon from './app/components/Icon'
import AccountScreen from './app/screens/AccountScreen'
import ListingScreen from "./app/screens/ListingScreen";


export default function App() {
  return (
    <>
      {/* <WelcomeScreen /> */}
      <ListingScreen/>

     
        {/* <MessagesScreen /> */}

        {/* <AccountScreen 
        backgroundColor='white'
        /> */}
       


      {/* <ViewImageScreen /> */}
      {/* <ScrollView>
        <View style={styles.container}>
          <Card
            title="My front"
            subTitle="Click to see more"
            image={require('./app/assets/foto4.jpg')}
          />
          <Card
            title="My back"
            subTitle="Click to see more"
            image={require('./app/assets/foto3.jpg')}
          />

        </View>
      </ScrollView> */}
      {/* <ListingDetailScreen
        title='ok'
        subTitle="Does it look good?!"
      /> */}

    </>
  );
}

const styles = StyleSheet.create({

})
