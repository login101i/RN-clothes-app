import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Icon({ name, color, size = 40, backgroundColor = "#fff",
}) {
    return (

        <View style={styles.container}
            style={{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor,
                justifyContent: "center",
                alignItems: "center",
                borderColor:"grey",
                borderWidth:3
              
            }}
        >
            <MaterialCommunityIcons
                name={name}
                color={color}
                size={size*0.7}
            // backgroundColor={backgroundColor}
            />

        </View>

    )
}

const styles = StyleSheet.create({


})
