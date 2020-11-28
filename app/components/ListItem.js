import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import ItemListSeparator from '../components/ListItemSeparator'
import Swipeable from 'react-native-gesture-handler/Swipeable'




import SimpleText from '../components/SimpleText'
import colors from '../config/colors'
import { render } from 'react-dom'

import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions, textColor }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.lightGrey}
                onPress={onPress}>

                <View style={styles.container}>
                    {IconComponent}
                    {image && <Image source={image}
                        style={styles.image}
                    />}
                    <View style={styles.nameDetails}>
                        <View style={styles.name}>
                            <SimpleText
                                title={title}
                                numberOfLines={1}
                            />
                        </View>
                        <Text></Text>
                        <SimpleText
                            subTitle={subTitle}
                            colorek={textColor}
                            numberOfLines={3}
                        />
                    </View>
                    <MaterialCommunityIcons
                        name="chevron-right"
                        color="black"
                        size={22}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        alignItems:'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    name: {
        flexDirection: 'row',
        marginTop: 0,
    },
    nameDetails: {

        marginLeft: 10,
        flex:1,
        


    }
})
