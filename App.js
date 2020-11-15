import React, { useState, useEffect } from "react";

import { View, StyleSheet, Text, Image, Button } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'



import ListingDetailScreen from './app/components/ListingDetailScreen'
import ListingEditScreen from './app/screens/ListingEditScreen'
import Screen from './app/screens/Screen'
import ImageInput from './app/components/ImageInput'


export default function App() {

  const [imageUri, setImageUri] = useState()



  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync()
      if (result.cancelled) alert('Nie wybrano żadnego obrazu')
      else {
        setImageUri(result.uri)
      }
    } catch (error) {
      console.log('Nie udało się', error)
    }

  }

  return (
    <>

      <Screen>

        <ListingEditScreen 
        imageUri={imageUri}
         onChangeImage={uri=>setImageUri(uri)}
         />
     
      </Screen>

    </>
  );
}

const styles = StyleSheet.create({

})
