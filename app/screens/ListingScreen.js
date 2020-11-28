import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import AppButton from '../components/AppButton'
import Card from '../components/Card'
import listingsApi from '../api/listings'
import Screen from '../screens/Screen'
import routes from '../navigation/Routes'
import SimpleText from '../components/SimpleText'
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi'



export default function ListingScreen({ navigation }) {

    const getListings = useApi(listingsApi.getListings)

    useEffect(() => {
        getListings.request()
    }, [])


    return (
        <Screen>
            {getListings.error && <>
                <SimpleText > Nie mogę pobrać danych</SimpleText>
                <AppButton color='black' textColor="white" title="spróbuj ponownie" onPress={getListings.request} />
            </>}
            <ActivityIndicator visible={getListings.loading} />
            <FlatList
                data={getListings.data}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={item.price + " zł"}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                        thumbnailUrl={item.images[0].thumbnailUrl}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({})
