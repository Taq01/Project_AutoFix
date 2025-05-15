import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import React, { useState,useEffect } from "react";
 import axios from "axios";

import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { storeApiKey, getApiKey, fetchData } from "../Auth/Auth";


export default function App() {
    const navigation=useNavigation();
    // const [loaded] = useFonts({
    //   Inter: require("./../../assets/fonts/Inter-Regular.ttf"),
    // });
    const [username, setUsername] = useState("admin");
    const [password, setPassword] = useState("admin");
   
  const fetchGetCredentials = async (username, password) => {
 

    query = `{"username":"${username}","password":"${password}"}`;
    const options = {
      headers: {
        "content-type": "application/json",
        "x-apikey": "605163cf571a4bbcb6428b708edbc1d89c43e",
        "cache-control": "no-cache",
      },
    };
    axios
      .get("https://calle-6c4b.restdb.io/rest/json?q=" + query, options)
      .then((response) => {
        //console.log(response.data[0]._id);
        if (response.data[0]._id !== undefined) {
          console.log("success");
          console.log(response.data[0]._id);
          storeApiKey(response.data[0]._id);
          navigation.push("HomeHead");
        } else {
          Alert.alert("Worng Credentials");
          setPassword();
          setUsername();
          return false;
        }
        //storeApiKey(response._id);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert("Worng Credentials");
        setPassword();
        setUsername();
        return false;
      });
  };


















    const checkData = ()=>{
    const u = fetchGetCredentials(username,password)
      .then((apiKey) => {
 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
 
    
    }
  return (

    
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image
          style={{
            width: 250,
            height: 250,
          }}
          resizeMode="contain"
          source={require("./../../assets/file.png")}
        />
        <Text
          style={{
            fontSize: 25,
    
          }}
        ></Text>
      </View>
      <View style={styles.middleView}>
         <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.button}
          // onPress={() => checkData ? navigation.push("Home") : console.log('Wrong username or password')}
          onPress={() => checkData()}
        >
          <Text
            style={{ color: "white", fontWeight: 400,  }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.middleView}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={()=> navigation.push('Home')}>
          <Text
            style={{ color: "white", fontWeight: 400, fontFamily: "Inter" }}
          >
            Sign in
          </Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    justifyContent: "space-between", // Position the top and middle views with space between them

    // alignItems: "center",
    // justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1a1355",
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 10,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: "#FFFFFF",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: "lightgray",
    color: "gray",
    borderRadius: 10,
 
  },

  topView: {
    flex: 1,
    alignItems: "center", // Center the image and text horizontally
    justifyContent: "flex-start", // Position the image and text at the top
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    marginTop: 16,
  },
  middleView: {
    flex: 4,

    alignItems: "center",
    justifyContent: "center",
  },
});
