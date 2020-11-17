import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import {MaterialCommunityIcons} from 'react-native-vector-icons'

import colors from '../config/colors'

export default function NewListingButton({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MaterialCommunityIcons name="plus-circle" size={33} color={colors.white} />
            </View>
        </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({

    container:{
        backgroundColor:'tomato',
        height:80,
        width:80,
        borderRadius:40,
        bottom:30,
        borderColor:colors.white,
        borderWidth:5,
        alignItems:'center',
        justifyContent:'center'

    }
})
