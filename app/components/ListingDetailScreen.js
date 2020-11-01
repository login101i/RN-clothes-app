import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'

export default function ListingDetailsScreen({ title, subTitle }) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/foto3.jpg')} />
            <View style={styles.detailContainer}>
                <AppText
                    title={title}
                    subTitle={subTitle}
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
