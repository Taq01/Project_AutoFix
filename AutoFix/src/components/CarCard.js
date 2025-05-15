import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React, { useEffect, useState, memo, Component } from "react";




export default function CarCard(props) {
 
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.carImage}
          source={require("./../../assets/car.jpg")}
        />
        <Text style={{fontSize:20,fontWeight:500,}}> {props.prop}</Text>
   
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding:15,
 
 
    
  },
  carImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    borderColor: "#ccc",
    borderWidth: 1,
  },
});
