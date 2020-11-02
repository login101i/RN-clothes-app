import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'

import AppText from '../components/AppText'

export default function PickerItem({ title, onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <AppText title={title} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})
