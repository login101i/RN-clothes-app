import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from 'formik';

import AppButton from '../AppButton'



export default function SubmitButton({title, color, textColor}) {

    const {handleSubmit}=useFormikContext()
    return (
        <View>
            <AppButton
                title={title}
                color={color}
                onPress={handleSubmit}
                textColor={textColor}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
