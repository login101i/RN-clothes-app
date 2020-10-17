import React from 'react'

import { View, Image, StyleSheet } from 'react-native'

import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'
import Card from '../components/Card'

export default function XXX() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/antek.jpg')} />
            <View style={styles.detailsContainer}>

                <AppText style={styles.title}>Jacket</AppText>
                <AppText style={styles.price}>100zł</AppText>
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
    detailsContainer:{
        padding:20
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight:'500'
    },
    price: {
        fontSize: 12,
        color:colors.secondary,
        marginVertical:10
    }

})
