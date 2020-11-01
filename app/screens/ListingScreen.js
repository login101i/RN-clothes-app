import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from '../screens/Screen'
import Card from '../components/Card'

const listings = [
    {
        id: 1,
        title: 'My butt',
        price: 100,
        image: require('../assets/foto_1.jpg')
    },
    {
        id: 1,
        title: 'My butt',
        price: 100,
        image: require('../assets/foto_1.jpg')
    }
]

export default function ListingScreen() {
    return (
        <Screen>
            <FlatList
                data={listings}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Card
                    title={item.title}
                    subTitle={item.price + " zł"}
                    image={item.image}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})
