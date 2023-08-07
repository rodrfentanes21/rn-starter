import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function ColorCounter({ color, onIncrease, onDecrease }) {
  return (
    <View style={styles.minorView}>
      <Text style={styles.minorText}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={onIncrease} />
      <Button title={`Decrease ${color}`} onPress={onDecrease} />
    </View>
  )
}

const styles = StyleSheet.create({
  minorView: {
    alignSelf: 'center',
    width: '80%',
    gap: 5,
  },
  minorText: {
    fontSize: 15,
    alignSelf: 'center',
  },
})
