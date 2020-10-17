import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'


import colors from '../config/colors'

function ViewImageScreen() {
    return (
        <View style={styles.container} >
            <View>

                <View
                    style={styles.closeIcon}>
                    <MaterialCommunityIcons name="close" color="white" size={30} />
                </View>
                <View style={styles.deleteIcon}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Button type='outline' 
                            icon={
                                <Icon
                                    name="trash"
                                    size={15}
                                    color="white"
                                    style={styles.icon}
                                    
                                />
                            }
                            title="delete"
                        />
                    </TouchableOpacity>
                </View>

            </View>

            <Image
                style={styles.image}
                source={require('../assets/antek.jpg')}
                resizeMode="contain"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
        width:100,
        color:colors.white
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    closeIcon: {

        position: 'absolute',
        top: 50,
        left: 50,


    },
    deleteIcon: {

        position: 'absolute',
        top: 50,
        right: 50,
    },
    image: {
        width: "100%",
        height: "100%",
        marginTop: 26
    },
    icon:{
        marginRight:10,
        color:'red'
    }

})

export default ViewImageScreen
