import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Image } from "react-native";
import React, { useEffect, useState, memo, Component } from "react";
import { StackActions } from "@react-navigation/native";
import Octicons from "@expo/vector-icons/Octicons";

import { TouchableOpacity } from "react-native";


export default function HomeHeader(props) {
    
      const createThreeButtonAlert = () =>{

    Alert.alert('Alert Title')


      }
  return (
    <View style={styles.container}>
      <View>
        {/* <FontAwesome5
          name="hamburger"
          size={24}
          color="black"
          onPress={createThreeButtonAlert}
        /> */}
        {/* <Octicons
          name="three-bars"
          size={24}
          color="black"
          onPress={createThreeButtonAlert}
        /> */}

        <Text style={{ color: "black", fontWeight: "bold", fontSize: 30 }}>
          HI,  {props.prop}
        </Text>
      </View>
      <View>
        <Image
          style={styles.userImage}
          source={require("./../../assets/profile.jpg")}
           
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    resizeMode: "contain",

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingTop: 40,
    paddingHorizontal: 20,
 
    height: 120,
    // borderBottomColor: "lightgray",
    // borderBottomWidth: 1,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
