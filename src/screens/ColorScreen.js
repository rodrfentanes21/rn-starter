import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useState } from 'react'

export default function ColorScreen() {
  const [colors, setColors] = useState([])

  return (
    <View>
      <Text style={styles.text}>Add Color</Text>
      <Button
        title="Add Color"
        onPress={() => {
          setColors([...colors, randomRGB()])
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: item }}
            ></View>
          )
        }}
      />
    </View>
  )
}

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  return `rgb(${red}, ${green}, ${blue})`
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: 'center',
  },
})
