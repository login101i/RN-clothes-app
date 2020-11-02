import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import defaultStyles from '../config/styles'

export default function AppText({ title, subTitle, colorek = "black", flexx, widthh}) {
    return (
        <>
            <View style={styles.container}>
                {title && <Text
                    style={[defaultStyles.text,{width:widthh},{ textTransform: 'uppercase' }]}>{title}</Text>}
                {subTitle && <Text style={[styles.subtitleText, { color: defaultStyles.colors[colorek] }]}>{subTitle}</Text>}

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        flexDirection:'row'
    },

    subtitleText: {
        fontWeight: '200',
        fontSize: 18,
    },
})
