import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useEffect, useState, memo, Component } from "react";
import CarCard from "./CarCard";

export default function MycarWidget({cars, toRemove}) {
  const [username, setUsername] = useState("");
  const [selected, setSelected] = useState(null);

  function handleCarClick(index) {
    toRemove(index);
  }
console.log('ssssssssssssssss',cars)
  return (
    <View style={styles.container}>
      <Text>{username}</Text>
      <View>
        <Text style={{ fontSize: 20, fontWeight: 800 }}> Your Cars: </Text>
        <Text style={{ fontSize: 10 }}> click on the car to delete it </Text>
        {cars.length < 1 ? (
          <Text>Add a car now by click the button!</Text>
        ) : (
          <FlatList
            data={cars}
            // renderItem={({ item, index }) => <CarCard prop={item} />}

            renderItem={({ item, index }) => (
              <View style={{ backgroundColor: "red" }}>
                <Pressable onPress={() => handleCarClick(index)}>
                  <CarCard prop={item} />
                </Pressable>
              </View>
            )}
            contentContainerStyle={{ columnGap: 50 }}
            horizontal
          ></FlatList>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
    paddingVertical: 10,
 
   
    height: 50,
  },

 
});
