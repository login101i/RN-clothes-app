import React, { Component } from 'react'
import { StyleSheet, Keyboard, Text, View,TouchableWithoutFeedback, ImageBackground, Dimensions, Animated, Button } from 'react-native'
import Screen from './Screen'
import Input from '../components/loginForm/Input'
import AppButton from '../components/AppButton'
import Colors from '../config/colors'




const { width, height } = Dimensions.get('screen')


export default class AnimatedLoginScreen extends Component {

    // __________________________________________________________________
    state = {
        blur: 2,
        alpha: 0.2,
        theme: 'black',
        marginBottomXX: new Animated.Value(100),
        buttonsAlignment: new Animated.Value(0)
    }
    // __________________________________________________________________

    AnimateAlignmentToTop = () => {
        Animated.timing(this.state.marginBottomXX, {
            toValue: 0,
            duration: 0,
        }).start(() => {

            Animated.timing(this.state.buttonsAlignment, {
                toValue: 400,
                duration: 1500
            }).start()


            this.setState({ blur: 5, alpha: 0.7, theme: 'white' })

        })
    }
    AnimateAlignmentToBottom = () => {
        Animated.timing(this.state.marginBottomXX, {
            toValue: 100,
            duration: 500
        }).start(() => {
            this.setState({ blur: 2, alpha: 0.2, theme: 'black' })

            Animated.timing(this.state.buttonsAlignment, {
                toValue: 0,
                duration: 1500
            }).start()

        })
    }

    handleOnFocus = () => {
        this.AnimateAlignmentToTop()
    }
    handleOnBlur = () => {

        this.AnimateAlignmentToBottom()
    }


    // __________________________________________________________________
    render() {
        const { blur, alpha, marginBottomXX } = this.state
        const dynamicBorders = {
            borderBottomColor: this.state.theme === "black" ? "white" : "black"
        }
        const blackWhite = this.state.theme === "black" ? "white" : "black"

        const buttonsAlignment = {
            transform: [
                {
                    translateY: this.state.buttonsAlignment
                }
            ]
        }
        // _____________________________________
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    Keyboard.dismiss()
                }}>
                <ImageBackground
                    style={styles.bg}
                    source={require('../assets/mountains.jpg')}
                    blurRadius={blur}

                >
                    <View
                        style={[styles.container,
                        {
                            backgroundColor: this.state.theme === 'black' ?
                                `rgba(0,0,0,0.5)` : `rgba(255,255,255,${alpha})`
                        }]}>
                        <View style={styles.inputContainer}>
                            <View style={styles.headerContainer}>
                                <Text style={[styles.h1, { color: blackWhite }]}>Sing IN</Text>
                                <Text style={{ marginTop: 10, marginLeft: 10, fontSize: 23, color: blackWhite }}>/ UP</Text>
                            </View>
                            <Animated.View style={[styles.buttonContainer, { marginBottom: marginBottomXX }]}>
                                <Input
                                    style={dynamicBorders}
                                    placeholder="Username"
                                    onFocus={() => this.handleOnFocus()}
                                    placeholderColor={blackWhite}
                                    onBlur={() => this.handleOnBlur()}
                                />
                                <Input
                                    style={dynamicBorders}
                                    placeholder="Password"
                                    onFocus={() => this.handleOnFocus()}
                                    placeholderColor={blackWhite}
                                    onBlur={() => this.handleOnBlur()}
                                />
                                <View style={styles.enter}>
                                    <Text style={{ fontSize: 33, color: blackWhite }}>Enter</Text>
                                </View>
                            </Animated.View>

                            {/* _______________________________________ */}
                        </View>


                        <Animated.View style={[{ width: 302 }, buttonsAlignment]}>

                            <AppButton
                                title="Sign in with Facebook"
                                color='fbColor'
                                textColor={this.state.theme === "black" ? "white" : 'white'}
                                iconName="facebook"


                            />
                        </Animated.View>
                        <Animated.View style={[{ width: 302 }, buttonsAlignment]}>
                            <AppButton
                                title="Twitter"
                                color='twitterColor'
                                textColor={this.state.theme === "black" ? "white" : 'white'}
                                iconName="twitter"
                            />
                        </Animated.View>





                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        height: '100%'
    },
    h1: {
        fontSize: 53,
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',

    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 74,
        width: '100%'

    },
    headerContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {

        textAlign: 'center',
        justifyContent: 'center'

    },
    enter: {
        alignItems: "flex-end"
    },


})
