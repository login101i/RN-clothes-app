import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from '../AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ name, width, ...otherProps }) {

    const { handleChange, setFieldTouched, errors, touched } = useFormikContext()
    return (
        <View>
            <AppTextInput
                onChangeText={handleChange(name)}
                onBlur={() => setFieldTouched(name)}
                width={width}
                {...otherProps}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </View>
    )
}

const styles = StyleSheet.create({})
