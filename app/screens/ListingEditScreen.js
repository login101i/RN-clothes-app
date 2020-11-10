import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'


import * as Yup from 'yup'
import {
    AppForm, AppFormField, AppFormPicker, SubmitButton
} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label(),
    price: Yup.number().required().min(1).max(10000).label('cena'),
    description: Yup.string().label('opis'),
    category: Yup.object().required().nullable().label("Kategoria")
})

const categories = [
    { label: "kot", value: 1 },
    { label: "piesek", value: 2 }
]


export default function ListingEditScreen() {

    

    return (
        <View>
            <AppForm
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                    category: null
                }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    name="title"
                    icon='box'
                    autoCapitalize
                    autoCorrect={true}

                    placeholder="Nazwa produktu"

                />

                <AppFormField
                    name="price"
                    icon='coin'
                    autoCapitalize
                    autoCorrect={true}
                    placeholder="cena"
                    keyboardType='numeric'
                    maxLenght={8}
                    width={120}

                />
                <AppFormPicker
                    name="category"
                    items={categories}
                    PickerItemComponent={CategoryPickerItem}
                    placeholder="Kategoria"
                    icon="apps"
                    width={250}
                    />
                <AppFormField
                    name="description"
                    autoCapitalize
                    numberOfLines={3}
                    autoCorrect={true}
                    placeholder="Opis"
                    multiline
                    maxLength={222}
                />

                <SubmitButton
                    title="Dodaj"
                    color="black"
                    textColor="white"
                />
            </AppForm>
        
        </View>
    )
}

const styles = StyleSheet.create({})
