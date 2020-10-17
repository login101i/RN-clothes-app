import React from 'react'
import { FlatList, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors.js'


const listings=[
    {
        id:1,
        title:'Red Jacket for sale',
        price:100,
        image:require('../assets/room-9.jpeg')
    },
    {
        id: 1,
        title: 'Red Jacket for sale',
        price: 1000,
        image: require('../assets/antek.jpg')
    }
]

export default function ListingScreen() {
    return (
       <Screen style={styles.screen}>
           <FlatList
           data={listings}
           keyExtractor={listing=>listing.id.toString()}
           renderItem={({item})=>
        
        <Card
        title={item.title}
        subTible={item.price + "zł"}
        image={item.image}
        />
    }
           />
       </Screen>
    )
}



const styles=StyleSheet.create({
    screen:{
        padding:20,
        backgroundColor:colors.light
    }
})