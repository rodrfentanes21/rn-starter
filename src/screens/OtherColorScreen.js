import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import React, { useReducer } from 'react'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 30

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }

    case 'green':
      return state.green + action.amount > 255 ||
        state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }

    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }

    default:
      return state
  }
}

export default function ColorScreen() {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  return (
    <View>
      <Text style={styles.text}>Color Creator</Text>

      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
      />

      <View
        style={{
          height: 200,
          width: 200,
          alignSelf: 'center',
          marginTop: 20,
          backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
        }}
      ></View>
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
