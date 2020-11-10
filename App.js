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
import ListingEditScreen from './app/screens/ListingEditScreen'
import ListItem from './app/components/ListItem'



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
        {/* <LoginScreen /> */}
        <ListingEditScreen />
        {/* <MessagesScreen/> */}
        {/* <AppTextInput
        placeholder="user"
        icon="email"
        color="green"
      />
      */}
      {/* <ListItem
      title=" I gonna never let you down, never gonna let you fell bad."
          subTitle="Yes its totaly tru, belivie me, belivie me, belivie me, belivie me, belivie me, belivie me, belivie me."
      image={require('./app/assets/foto4.jpg')}
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
