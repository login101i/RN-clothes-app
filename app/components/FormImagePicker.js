import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useFormikContext } from "formik";


import ImageInputList from './ImageInputList'
import ErrorMessage from './forms/ErrorMessage'

export default function FormImagePicker({ name }) {

    const { errors, setFieldValue, touched, values } = useFormikContext();


    const imageUris = values[name]
    handleAdd = uri => {
        setFieldValue(name, [...imageUris, uri])
    }

    handleRemove = uri => {
        setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
    }


    return (
        <>
            <ImageInputList
                imageUris={values[name]}
                onAddImage={handleAdd}
                onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]} />

        </>


    )
}

const styles = StyleSheet.create({})

