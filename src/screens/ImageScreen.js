import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ImageDetail from '../components/ImageDetail'

export default function ImageScreen() {
  return (
    <View>
      <ImageDetail title="Kylian Mfrappe" img={require('../../assets/mfrappe.jpg')} shirtNumber="7"/>
      <ImageDetail title="Piponel Pepsi" img={require('../../assets/pessi.jpg')} shirtNumber="10"/>
      <ImageDetail title="Cristiano Columbus" img={require('../../assets/cristiano.png')} shirtNumber="7"/>
      <ImageDetail title="Vendepan" img={require('../../assets/vendepan.jpg')} shirtNumber="9"/>
    </View>
  )
}

const styles = StyleSheet.create({})