import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'

export default function Input({ placeholder, onChangeText, onFocus, onBlur, style, placeholderColor, textColor }) {
    return (
        <View style={[styles.textInput, style]}>
          
                <TextInput
                    placeholder={placeholder}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    style={{ fontSize: 19, textAlign: 'center' }}
                    placeholderTextColor={placeholderColor}
                // onChangeText={(text) => value(text)}
                color={textColor}
              



                />
           
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        width: 300,
        borderBottomWidth: 2,
        marginVertical: 22
    }
})
