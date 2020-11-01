import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Icon from '../components/Icon'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Screen from '../screens/Screen'
import LIstItemSeparator from '../components/ListItemSeparator'

const items = [
    {

        title: "My Photos",
        icon: {
            name: 'format-list-bulleted',
            color: 'purple'
        }
    },
    {

        title: "Hot Messages",
        icon: {
            name: 'email',
            color: 'purple'
        }
    }
]


export default function AccountScreen({ backgroundColor }) {
    return (
        <>
            <Screen style={styles.screen}>

                <View style={[styles.container, { backgroundColor: backgroundColor }]}>
                    <ListItem
                        title="Maciej Krus"
                        subTitle="maciejkruszyniak@gmail.com"
                        IconComponent={<Icon
                            name="email"
                            color="purple"
                        />}
                        textColor="black"
                    />
                </View>
                <View style={[styles.container, { backgroundColor: backgroundColor }]}>

                    <FlatList
                        data={items}
                        keyExtractor={it => it.title}
                        renderItem={({ item }) =>
                            <ListItem
                                title={item.title}
                                IconComponent={<Icon
                                    name={item.icon.name}
                                    color={item.icon.color}
                                />}
                            />
                        }
                        ItemSeparatorComponent={LIstItemSeparator}
                    />

                </View>



                <View style={[styles.container, { backgroundColor: backgroundColor }]}>
                    <ListItem
                        title="Log out"
                        IconComponent={<Icon
                            name="logout"
                            color="purple"
                        />}
                        textColor="lightGrey"
                    />
                </View>
            </Screen>

        </>
    )
}



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'pink',
        alignItems: 'center',
        marginBottom: 22
    },

    screen: {
        backgroundColor: colors.lightGrey,

    }

})
