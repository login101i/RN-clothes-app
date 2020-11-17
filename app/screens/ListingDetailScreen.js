import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen({ title, subTitle, route }) {

    const listing=route.params


    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailContainer}>
                <AppText
                    title={listing.title}
                    subTitle={listing.subTitle}
                    color="green" />
                <ListItem
                    image={require('../assets/favicon.jpg')}
                    title="Ariana"
                    subTitle="Novodic"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailContainer: {
        padding: 10,
    
    },
    image: {
        width: '100%',
        height: 422
    }

})
