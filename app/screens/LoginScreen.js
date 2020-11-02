import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'

import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import Screen from '../screens/Screen'
import AppText from '../components/AppText'
import SimpleText from '../components/SimpleText'
import ErrorMessage from '../components/ErrorMessage'
import AppFormField from '../components/AppFormField'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email Koleżko"),
    password: Yup.string().required().min(4).label("Hasełko")
})

export default function LoginScreen() {

    return (
        <Screen>

            <View style={styles.container}>
                <Image source={require('../assets/favicon.jpg')}
                    style={styles.logo}
                />

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <>
                            <AppTextInput
                                icon='email'
                                placeholder="email"
                                autoCapitalize="none"
                                autoCorrect={false}
                                textContentType="emailAddress"
                                onBlur={() => setFieldTouched('email')}


                                onChangeText={handleChange('email')}
                            />
                            <ErrorMessage error={errors.email} visible={touched.email} />

                            <AppFormField/>




                            <AppTextInput
                                icon='lock'
                                placeholder="password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                textContentType="password"
                                secureTextEntry
                                onBlur={() => setFieldTouched('password')}


                                onChangeText={handleChange('password')}

                            />
                            <ErrorMessage error={errors.password}  visible={touched.password}/>

                            <AppButton
                                title="Zaloguj się"
                                color="black"
                                textColor="white"
                                onPress={handleSubmit}
                            />

                        </>
                    )}
                </Formik>




            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 20,
        marginBottom: 50,



    }
})
