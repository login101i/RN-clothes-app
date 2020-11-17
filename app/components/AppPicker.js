import React, { useState } from 'react'
import { StyleSheet, View, Modal, FlatList } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from '../config/colors'
import defaultStyles from '../config/styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import AppButton from '../components/AppButton'
import PickerItem from '../components/PickerItem'
import SimpleText from '../components/SimpleText'


export default function AppPicker({ icon, items, color = "#0c0c0c", size = 44, numColumns=1, onSelectItem, placeholder, PickerItemComponent = PickerItem, selectedItem, width = "100%" }) {
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <>
            <TouchableWithoutFeedback onPress={() => {
                setModalVisible(true),
                    console.log('hah')
            }}>
                <View style={[styles.container, { width }]}>
                    {icon && <MaterialCommunityIcons
                        style={styles.iconka}
                        name={icon}
                        color={color}
                        size={size}
                    />}
                    {selectedItem ? (
                        <SimpleText>{selectedItem.label}</SimpleText>
                    ) : (
                            <SimpleText txtColor={defaultStyles.colors.grey}>{placeholder}</SimpleText>
                        )}
                    <MaterialCommunityIcons

                        name="chevron-down"
                        color={colors.dark}
                        size={32}
                        style={styles.arrowDown}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <AppButton title="zamknij" onPress={() => setModalVisible(false)} />
                <FlatList
                    data={items}
                    numColumns={numColumns}
                    keyExtractor={item => item.value.toString()}
                    renderItem={({ item }) => (
                    <PickerItemComponent
                        item={item}
                        title={item.label}
                        onPress={() => {
                            setModalVisible(false)
                            onSelectItem(item)
                        }}
                    />)}
                />
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    arrowDown: {
        marginLeft: 'auto'
    },
    container: {
        backgroundColor: defaultStyles.colors.lightGrey,
        borderRadius: 25,
        flexDirection: 'row',
        // width: '100%',
        padding: 10,
        marginVertical: 10,
        alignItems: 'center',

    },
    text: {
        flex: 1,
        marginLeft: 44,
    },
    placeholder: {
        color: defaultStyles.colors.purple,
        flex: 1,
    },
    iconka: {
        marginRight: 10
    }


})
