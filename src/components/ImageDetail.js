import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function ImageDetail({ title, img, shirtNumber }) {
  return (
    <View style={styles.viewStyle}>
        <Image source={img} style={{
            resizeMode: 'contain',
            height: 150,
            width: 150,
          }}/>
      <Text>{title}</Text>
      <Text>Número {shirtNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    viewStyle: {
        
      },
})