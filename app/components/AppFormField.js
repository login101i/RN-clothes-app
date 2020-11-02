import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Formik, useFormikContext } from 'formik'
import { useFomikContext } from 'formik'

import AppTextInput from './AppTextInput'
import ErrorMessage from './ErrorMessage'

export default function AppFormField({ icon, placeholder, name, ...otherProps }) {

    const { handleChange, errors, touched, setFieldTouched } = useFormikContext()
    return (
        <Formik>
            <AppTextInput
                icon={icon}
                placeholder={placeholder}
                {...otherProps}
                // autoCapitalize="none"
                // autoCorrect={false}
                // textContentType="emailAddress"
                onBlur={() => setFieldTouched(name)}


                onChangeText={handleChange(name)}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </Formik>
    )
}

const styles = StyleSheet.create({})
