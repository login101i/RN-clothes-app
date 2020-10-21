import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors'

export default function ImageInput({ imageUri, onChangeImage }) {

    const requestPermission=async()=>{
        const {granted}=await ImagePicker.requestCameraRollPermissionsAsync()
        if (!granted) alert ('Musisz mieć dostęp do multimediów!')

    }
    useEffect(()=>{
        requestPermission()
    }, [])

    const handlePress = () => {
        if (!imageUri) selectImage()
        else Alert.alert('Usuń', 'Na pewno chcesz usunąć ??', [
            { text: 'Si si muy bien :)', onPress: () => onChangeImage(null) },
            { text: 'No jasne, że nie' }
        ])
    }
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5
            })
            if (!result.cancelled)
                onChangeImage(result.uri)
        } catch (error) {
            console.log("nie działa")
            console.log(error)
        }

    }

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons color={colors.black}
                    name="camera" size={40} />}
                {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        width: 100,
        height: 100,
        // flexDirection:'row',
        overflow: 'hidden'

    },
    image: {
        width: '100%',
        height: '100%'
    }
})
