import React from 'react'
import Swipeable from 'react-native-gesture-handler/Swipeable'

import { View, Image, StyleSheet, TouchableHighlight } from 'react-native'
import AppText from './AppText'

import colors from '../config/colors'

export default function ListItem({ title, subTitle, image, onPress, renderRightActions, IconComponent }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>

            <TouchableHighlight onPress={onPress}
                underlayColor={colors.light}
            >

                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image} style={styles.image} />}
                    <View style={styles.textContainer}>
                        <AppText style={styles.title}>{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                    </View>
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        padding: 15,
        backgroundColor:colors.white
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50,
        margin: 10
    },
    textContainer: {
        justifyContent: 'center',
        marginLeft: 10
    },
    title: {
        fontWeight: "700"
    },
    subTitle: {
        color: colors.medium
    }
})
