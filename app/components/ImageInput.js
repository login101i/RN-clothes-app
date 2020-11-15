import React, {useEffect} from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function ImageInput({ imageUri, onChangeImage }) {

    const getImagePermission = async () => {
        const result = await ImagePicker.getCameraRollPermissionsAsync()
        // const result = Permissions.askAsync(Permissions.LOCATION)

    }

    useEffect(() => {
        getImagePermission()
    }, [])

    // _______________ powyżej zezwolonie na dostęp

    const handlePress = async () => {

        if (!imageUri) selectImage()
        else Alert.alert('Na pewno chcesz usunąć?', 'Powiedz, że nie', [{ text: "Nie", style: 'destructive' },
        { text: 'Tak', onPress: () => onChangeImage(null) }
        ])
    }

    const selectImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync()
        if (!result.cancelled) onChangeImage(result.uri)
    }

    //  _______ powyżej co się dzieje po kliknięciu na komponent

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && <MaterialCommunityIcons name="camera" size={44} />}
                {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}

            </View>
        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.grey,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden',
        elevation: 21,
    },
    image: {
        height: '100%',
        width: '100%'
    }
})
