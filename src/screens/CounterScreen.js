import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'

export default function CounterScreen() {
  const [counter, setCounter] = useState(0)
  return (
    <View>
      <Button
        onPress={() => {
          setCounter(counter + 1)
        }}
        title="Increase"
      />
      <Button
        onPress={() => {
          if (counter > 0) {
            setCounter(counter - 1)
          }
        }}
        title="Decrease"
      />
      <Text style={styles.text}>Current Count: {counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        alignSelf: 'center'
    }
})
