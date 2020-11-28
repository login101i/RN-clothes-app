import React, {useState, useContext} from 'react'
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native'


import { ErrorMessage, AppFormField, AppForm, SubmitButton } from '../components/forms'
import authApi from '../api/auth'
import jwtDecode from 'jwt-decode'
import AuthContext from '../../app/auth/context'
import authStorage from '../auth/storage'


import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    email: Yup.string().required().label('Twój emajl'),
    password: Yup.string().min(5).required().label("Twoje hasełko")
})

export default function LoginScreen() {
    const [loginFailed, setLoginFailed] = useState(false)
    const [registerFailed, setRegisterFailed] = useState(false)
    const authContext = useContext(AuthContext)

    const handleSubmit = async ({ email, password }) => {
        const result = await authApi.login(email, password)
        if (!result.ok) return setLoginFailed(true) 
        setLoginFailed(false)
        const user = jwtDecode(result.data)
        console.log(result.data)
        authContext.setUser(user)
        authStorage.storeToken(result.data)
        
    }

    return (
        <View>


            <Image
                style={styles.logo}
                resizeMode='contain'
                source={require("../assets/logo.png")} />

            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage
                    error="Niepoprawny email"
                    visible={loginFailed}
                />
               

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
