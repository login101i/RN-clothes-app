import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Platform, Modal, FlatList } from 'react-native'

import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors'
import defaultStyles from '../config/styles'
import AppText from '../components/AppText'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AppButton from '../components/AppButton'
import PickerItem from '../components/PickerItem'
import { onChange } from 'react-native-reanimated'

export default function AppPicker({ icon, items, color = "#0c0c0c", size = 44, onSelectItem, title }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                setModalVisible(true),
                console.log('hah')
            }}>
                <View style={styles.container}>
                    {icon && <MaterialCommunityIcons
                        style={styles.iconka}
                        name={icon}
                        color={color}
                        size={size}
                    />}
                    <AppText flexx={1} widthh="77%" title={title} />
                    <MaterialCommunityIcons

                        name="chevron-down"
                        color={colors.dark}
                        size={32}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <AppButton title="zamknij" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => <PickerItem
                        title={item.label}
                        onPress={() => {
                            setModalVisible(false)
                            onSelectItem(item.label)
                        }}
                    />}
                />
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',

    },
    text: {
        flex: 1,
        marginLeft: 44
    }


})
