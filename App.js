
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';
import * as ImagePicker from 'expo-image-picker'
import * as Permissions from 'expo-permissions'


import Screen from './app/components/Screen'
import ImageInput from './app/components/ImageInput'
import ImageInputList from './app/components/ImageInputList'
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {

  const [imageUris, setImageUris] = useState([])

  console.log(imageUris)

  handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }

  handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }





  return (

    <Screen>
      <ListingEditScreen />
    </Screen>

  )
}

