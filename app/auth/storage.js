import * as SecureStore from 'expo-secure-store'

import jwtDecode from 'jwt-decode'

const key = "authToken"

const storeToken = async authToken => {
    try {
        const token = await SecureStore.setItemAsync(key, authToken)

    } catch (error) {
        console.log('Error storing the auth token',)
    }
}

const getToken = async () => {
    try {
        const authToken = await SecureStore.getItemAsync(key)
        return authToken

    } catch (error) {
        console.log('Error getting the auth token')
    }
}

const getUser = async()=>{
    const token=await getToken()
    return (token)? jwtDecode(token):null
  
}

const removeToken = async () => {
    try {
        const removeToken = SecureStore.deleteItemAsync(key)

    } catch (error) {
        console.log("Token removed error")
    }
}







export default {
    removeToken, storeToken, getUser
}

