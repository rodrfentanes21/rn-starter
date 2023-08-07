import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function ComponentsScreen() {
  const galo = "vai tomar no cu felipao"


  return (
    <View>
      <Text style={styles.textStyle}>{galo}</Text>
      <Text style={styles.teste}>teste maluco</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    color: 'red'
  },
  teste: {
    fontSize: 30
  }
})
