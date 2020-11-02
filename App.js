import React, { useState } from "react";

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
import AppTextInput from './app/components/AppTextInput'
import AppPicker from './app/components/AppPicker'
import LoginScreen from './app/screens/LoginScreen'


const categories = [
  { label: "Odzież", value: 1 },
  { label: "Telefony", value: 2 },
  { label: "Napoje", value: 3 }
]

export default function App() {
  const [category, setCategory] = useState("Kategoria")


  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <ListingScreen/> */}
      <Screen>
        <LoginScreen />
        {/* <AppTextInput
        placeholder="user"
        icon="email"
        color="green"
      />
      <AppPicker
    
      onSelectItem={item=>setCategory(item)}
      title={category}
      icon="apps"
      color="red"
      items={categories}

      /> */}
      </Screen>


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
