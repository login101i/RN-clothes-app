import React from 'react'
import { StyleSheet, Text, Image, View } from 'react-native'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler'
import ItemListSeparator from '../components/ListItemSeparator'
import Swipeable from 'react-native-gesture-handler/Swipeable'




import AppText from '../components/AppText'
import colors from '../config/colors'
import { render } from 'react-dom'


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
                            <AppText
                                title={title}
                                />
                        </View>
                        <AppText
                            subTitle={subTitle}
                            colorek={textColor}
                        />
                    </View>
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
        paddingHorizontal: 20
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
 

    }
})
