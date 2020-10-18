
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';


import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {

  // const categories = [
  //   { label: "Meble", value: 1 },
  //   { label: "Elektronika", value: 2 },
  //   { label: "Książki", value: 3 },
  // ]


  // const [category, setCategory] = useState(categories[0])

  return (
    <>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      {/* <ListingDetailScreen/> */}
      {/* <MessageScreen/> */}
      {/* <MessagesScreen/> */}
      

        {/* <Screen >
          <ListItem
            title="my titfhtfttfhfhfhfhfthfhfthjfjle"
            subTitle="lololrtyryryryryrtyrttveyeyeyvrvrvrhvrhvo"
            image={require('./app/assets/me.jpg')}
          
        
          // IconComponent={<Icon
          //   name='email'
          //   size={50}
          //   backgroundColor="red"
          //   iconColor="white"
          // />}
          />

        </Screen> */}

      {/* <AccountScreen/> */}
      {/* <ListingScreen/> */}
      {/* <AppTextInput icon="email" placeholder="wpisz tutaj"/> */}

      {/* <AppPicker style={defaultStyles.text} icon="apps" placeholder="Kategoria" items={categories} selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
      />
      <AppTextInput icon="email" placeholder="Wpisz tutaj" ></AppTextInput> */}

      {/* <LoginScreen /> */}

      <ListingEditScreen/>


    </>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'white'
  }
})

