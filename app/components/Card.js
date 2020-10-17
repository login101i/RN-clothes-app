import React from 'react'

import { View, StyleSheet, Image, Text } from 'react-native'

import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from './ListItem'

export default function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>

                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subtitle}>{subTitle}</AppText>
            </View>
            <ListItem
            image={require("../assets/me.jpg")}
            title="Maciej Kruszyniak"
            subTitle="4 rzeczy"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        overflow:"hidden"
    },
    detailsContainer: {
        padding: 10,
    },
    title: {
        marginBottom: 7
    },
    image: {
        width: '100%',
        height: 200
    },
    subtitle:{
        color:colors.medium,
        fontWeight:'bold'
    }
})
