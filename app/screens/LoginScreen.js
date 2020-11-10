import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'


import {AppFormField, AppForm, SubmitButton} from '../components/forms'


import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().label('Twój emajl'),
    password: Yup.string().min(5).required().label("Twoje hasełko")
})

export default function LoginScreen() {


    return (
        <View>


            <Image
                style={styles.logo}
                resizeMode='contain'
                source={require("../assets/logo.png")} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    icon="email"
                    name="email"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Twój email"
                    textContentType='emailAddress'
                    keyboardType="email-address"

                />
                <AppFormField
                    icon="lock"
                    name="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholder="Twoje hasło"
                    textContentType='password'
                    secureTextEntry
                />

                <SubmitButton
                    title='Zaloguj'
                    color="black"
                    textColor="white"
                />
            </AppForm>




        </View >
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    logo: {
        width: 300,

        alignSelf: 'center',
        marginTop: 50

    }
})
