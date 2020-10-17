import React from 'react'

import {View } from 'react-native'

import Card from '../components/Card'

export default function CardView() {
    return (
      <View style={{
          backgroundColor:'#f8f4f4',
          padding:20,
          paddingTop:80,
           }}>
          <Card 
          title="Red Jacket"
          subTitle="100zł"
          image={require('../assets/antek.jpg')}
          />
      </View>
    )
}
