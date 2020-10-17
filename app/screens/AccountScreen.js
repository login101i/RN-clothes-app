import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'




import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'
import ListItemSeparator from '../components/ListItemSeparator'

const menuItems = [
    {
        title: "My Listing",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

export default function AccountScreen() {
    return (


        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Maciej"
                    subTitle="maciejkruszyniak@gmail.com"
                    image={require('../assets/me.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item }) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor} />
                            }/>
        }
                />
            </View>
            <ListItem
            title="Wyloguj"
            IconComponent={
                <Icon name="logout" backgroundColor='#ffa22d'/>
            }
            />
        </Screen>



    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        backgroundColor: 'white'
    },
    screen:{
        backgroundColor:colors.light
    }
})
