import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";


const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>home</Text>
      <Button onPress={() => navigation.navigate("Components")} title="Go to Components"/>
      <Button onPress={() => navigation.navigate("List")} title="Go to List"/>
      <Button onPress={() => navigation.navigate("Image")} title="Go to Image"/>
      <Button onPress={() => navigation.navigate("Counter")} title="Go to Counter"/>
      <Button onPress={() => navigation.navigate("Color")} title="Go to Color Generator"/>
      <Button onPress={() => navigation.navigate("OtherColor")} title="Go to Color Creator"/>
      <Button onPress={() => navigation.navigate("Name")} title="Go to Name"/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignSelf: "center"
  },
  view: {
    flex: 1,
    gap: 3,
    width: '80%',
    alignSelf: 'center'
  },
});

export default HomeScreen;