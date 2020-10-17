import React, { useState } from 'react'

import { FlatList, StyleSheet, View } from 'react-native'


import ListItem from '../components/ListItem'
import Screen from '../components/Screen'
import ListItemSeparator from '../components/ListItemSeparator'
import ListItemDeleteAction from '../components/ListItemDeleteAction'


const initialMessages = [
    {
        id: 1,
        title: "T1",
        description: "D1",
        image: require('../assets/me.jpg')
    },
    {
        id: 2,
        title: "T28",
        description: "D2",
        image: require('../assets/me.jpg')

    }
]

export default function MessageScreen(props) {

    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)

    const handleDelete = message => {
        // delete the message from 

        setMessages(messages.filter((m) => m.id !== message.id))
        // call the server
    }

    return (
        <Screen >

            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => <ListItem
                    title={item.title}
                    subTitle={item.description}
                    image={item.image}
                    onPress={() => console.log("selected", item)}
                    renderRightActions={() =>
                        <ListItemDeleteAction
                            onPress={() => handleDelete(item)}
                        />}


                />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages(
                        [
                            {
                                id: 1,
                                title: "T1",
                                description: "D1",
                                image: require('../assets/me.jpg')
                            },
                            {
                                id: 2,
                                title: "T28",
                                description: "D2",
                                image: require('../assets/me.jpg')
                            }
                        ]
                    )
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})