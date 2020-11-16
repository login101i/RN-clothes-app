import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import ImageInputList from '../ImageInputList'
import ErrorMessage from '../forms/ErrorMessage'
import { useFormikContext } from 'formik'



export default function FormImagePicker({name}) {

    const { setFieldValue, touched, values, errors } = useFormikContext()

    const imageUris=values[name]
    const handleAdd = (uri) => {
        setFieldValue(name,[...imageUris, uri])
    }
    const handleRemove = (uri) => {
        setFieldValue(name, imageUris.filter(item => item !== uri))
    }

    return (
        <View>
            <ImageInputList
                imageUris={imageUris}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage 
                name={errors[name]}
                visilbe={touched[name]} />
        </View>
    )
}

const styles = StyleSheet.create({})
