import React, { useState } from 'react'
import { StyleSheet, Text, View, Keyboard} from 'react-native'
import * as Yup from 'yup'




import {
    AppForm, AppFormField, AppFormPicker, SubmitButton
} from '../components/forms'
import CategoryPickerItem from '../components/CategoryPickerItem'
import ImageInput from '../components/ImageInput'
import FormImagePicker from '../components/forms/FormImagePicker'
import { useLocation } from '../hooks/useLocation'
import listingApi from '../api/listings'
import UploadScreen from './UploadScreen'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'


const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label(),
    price: Yup.number().required().min(1).max(10000).label('cena'),
    description: Yup.string().label('opis'),
    category: Yup.object().required().nullable().label("Kategoria"),
    images: Yup.array().min(1, "Wybierz minimum jeden obraz")
})

const categories = [
    {
        backgroundColor: "#fc5c65",
        icon: "floor-lamp",
        label: "Furniture",
        value: 1,
    },
    {
        backgroundColor: "#fd9644",
        icon: "car",
        label: "Cars",
        value: 2,
    },
    {
        backgroundColor: "#fed330",
        icon: "camera",
        label: "Cameras",
        value: 3,
    },
    {
        backgroundColor: "#26de81",
        icon: "cards",
        label: "Games",
        value: 4,
    },
    {
        backgroundColor: "#2bcbba",
        icon: "shoe-heel",
        label: "Clothing",
        value: 5,
    },
    {
        backgroundColor: "#45aaf2",
        icon: "basketball",
        label: "Sports",
        value: 6,
    },
    {
        backgroundColor: "#4b7bec",
        icon: "headphones",
        label: "Movies & Music",
        value: 7,
    },
    {
        backgroundColor: "#a55eea",
        icon: "book-open-variant",
        label: "Books",
        value: 8,
    },
    {
        backgroundColor: "#778ca3",
        icon: "application",
        label: "Other",
        value: 9,
    },
];



export default function ListingEditScreen({ imageUris, onChangeImage }) {

    // const location = useLocation()
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleSubmit = async (listing, { resetForm }) => {
        setProgress(0)
        setUploadVisible(true)
        const result = await listingApi.addListing({
            ...listing,
            // location
        },
            progress => setProgress(progress)
        )



        if (!result.ok) {
            setUploadVisible(false),
                alert('Nie mogę tego zachować');
        }
        resetForm()
    }



    return (
        <>
            <UploadScreen
                onDone={() => setUploadVisible(false)}
                progress={progress}
                visible={uploadVisible} />


            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

                <View>

                    <AppForm
                        initialValues={{
                            title: '',
                            price: '',
                            description: '',
                            category: null,
                            images: []
                        }}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        <FormImagePicker name="images" />
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
                            numColumns={3}
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
            </TouchableWithoutFeedback>
        </>
    )
}

const styles = StyleSheet.create({})
