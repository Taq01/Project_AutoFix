import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, Image } from "react-native";
import React, { useEffect, useState, memo, Component } from "react";

 
 
 
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
 
 
import Login from "./Login";
import Orders from "../screens/Orders";
import Service from "../screens/Services";
import Home from "../screens/Home";
 
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function TapNav() {
 
  return (
null

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
