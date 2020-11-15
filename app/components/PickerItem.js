import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

import AppText from '../components/AppText'

export default function PickerItem({ item, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText title={item.label} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
