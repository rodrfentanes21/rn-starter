import React from 'react'
import { View, Text, StyleSheet, FlatList} from 'react-native'

export default function ListScreen() {
  const jogadores = [
    {name: 'Messi', age: '36'},
    {name: 'Cristiano Ronaldo', age: '38'},
    {name: 'Neymar', age: '36'},
    {name: 'Suarez', age: '36'},
    {name: 'Xavi', age: '36'},
    {name: 'Iniesta', age: '36'},
    {name: 'Modric', age: '36'},
    {name: 'Benzema', age: '36'},
  ]

  return (
    <FlatList
    keyExtractor={(jogador) => jogador.name}
    data={jogadores}
    renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name} - idade: {item.age}</Text>;
    }} />
  )
}

const styles = StyleSheet.create({
    textStyle: {
      marginVertical: 50,
      backgroundColor: 'violet'
    },
  })