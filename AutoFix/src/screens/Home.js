 


//import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
 
} from "react-native";
import { TouchableOpacity } from "react-native";

import React, { useEffect, useState, memo, Component } from 'react';
import HomeHeader from '../components/HomeHeader';
import { Stack } from 'expo-router';
import MycarWidget from '../components/MycarWidget';
 
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useFetch from "../hook/useFetch";
import Sheet from "../components/Sheet";
import { storeApiKey, getApiKey, fetchData } from "../Auth/Auth";
 import axios from "axios";


const Tab = createBottomTabNavigator();

export default function Home() {
  const [userId, setUserId] = useState("");

  const [data, setData] = useState([]);
  const [lodaing, setLodaing] = useState(false);
  const [name, setName] = useState("");
  const [cars, setCars] = useState([]);

  const fetchOptions = {
    method: "GET",
    headers: {
      "cache-control": "no-cache",
      "x-apikey": "605163cf571a4bbcb6428b708edbc1d89c43e",
    },
  };

  const fetchUserData = async (id) => {
    const options = {
      headers: {
        "content-type": "application/json",
        "x-apikey": "605163cf571a4bbcb6428b708edbc1d89c43e",
        "cache-control": "no-cache",
      },
      // },
      // //  },
      // params: {

      //   username:"admin"
      // },
    };
    axios
      .get("https://calle-6c4b.restdb.io/rest/json/" + id, options)
      .then((response) => {
        console.log("-------2------ ");

        console.log(response.data);
        setName(response.data.name);
        setCars(response.data.cars);
      })
      .catch((error) => {
        console.log("error fetching u ser data", error);
      });
  };
           const updatecars = async () => {
        const url = `https://calle-6c4b.restdb.io/rest/json/`+userId;
        const { data } = await axios.put(
          url,
          // { name: "super" },
          { cars: cars },
          {
            headers: {
              "content-type": "application/json",
              "x-apikey": "605163cf571a4bbcb6428b708edbc1d89c43e",
              "cache-control": "no-cache",
            },
          }
        );
      }
    

  //   useEffect(() => {
  //          const onSubmit = async () => {
  //       const url = `https://calle-6c4b.restdb.io/rest/json/`+userId;
  //       const { data } = await axios.put(
  //         url,
  //         // { name: "super" },
  //         { cars: [] },
  //         {
  //           headers: {
  //             "content-type": "application/json",
  //             "x-apikey": "605163cf571a4bbcb6428b708edbc1d89c43e",
  //             "cache-control": "no-cache",
  //           },
  //         }
  //       );
  //     }
  //  onSubmit()
  //   }, []);

  // onSubmit()

  // useEffect(() => {
  //   fetch("https://autofix-e7a9.restdb.io/rest/json", fetchOptions)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       //console.log('Returned response:', response);
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log("Returned data:", json);
  //       setData(json);
  //       setLodaing(false);
  //     })
  //     .catch((error) => {
  //       console.error("An error occurred:", error);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (lodaing == false) {
  //     //   console.log(data[0].cars);
  //     const user_car = data[0].cars;
  //   }
  // }, [lodaing]);

  useEffect(() => {
    fetchData() //set user db id
      .then((apiKey) => {
        setUserId(apiKey);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    fetchData() //set user db id
      .then((apiKey) => {
        setUserId(apiKey);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetchUserData(userId)
      .then((apiKey) => {})
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [userId]);
  // const cars = lodaing === true ? false : data[0].cars;

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const addNewCar = (x) => {
    const newCar = x;
    console.log(x);
    let newcars = cars;
    newcars.push(newCar);
    setCars(newcars);
    console.log(cars);
    updatecars()
  };


  const removeByIndex = (array, index) => {
    const narray = array;
    narray.splice(index, 1);
    return narray;
  }
    const toRemove = (x) => {
      const newCar = x;
      let newCars= removeByIndex(cars,newCar)
      // setCars(newCars);
      setCars((newCar) => [...cars]);
      updatecars()
    };


  return (
    // <Stack>
    //     <Stack.Screen name='Home'
    //     options={{header:()=><HomeHeader/>}} />

    // </Stack>

    <View style={styles.container}>
      {lodaing === true ? (
        <Text> Loading .. </Text>
      ) : (
        <HomeHeader style={styles.header} prop={name} />
      )}
      {cars.length > 0 && <MycarWidget cars={cars} toRemove={toRemove} />}
      {/* {cars === [] ? (
        <Text> Loading .. </Text>
      ) : (
        <MycarWidget cars={cars} toRemove={toRemove} />
      )} */}

      <View
        style={{
          flex: 1,
          height: 30,
          padding: 10,
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          paddingHorizontal: 100,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flex: 1,
            height: 100,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 100,
            backgroundColor: "#fff",
          }}
        >
          {/* <TouchableOpacity style={styles.button}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity> */}
        

          <TouchableOpacity style={styles.button}>
            <Feather name="edit" size={24} color="black" />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="clipboard-text-multiple-outline"
              size={24}
              color="black"
            />
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity style={styles.addButton} onPress={toggleModal}>
          <Text style={{ color: "white" }}>Add New Car</Text>
        </TouchableOpacity>
      </View>
      <Sheet
        isOpen={modalOpen}
        toggleModal={toggleModal}
        addNewCar={addNewCar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    justifyContent: "space-between",
  },
  header: {
    position: "absolute",
    //top: StatusBar.currentHeight,
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
    shadowColor: "#000",
    marginHorizontal:10
  },

  addButton: {
    alignItems: "center",
    backgroundColor: "#1a1355",
    textAlign: "center",
    justifyContent: "center",
    height: 50,
    width: 300,
    borderRadius: 10,
    position: "absolute",
    //top: StatusBar.currentHeight,
    top:125,
  },
});


 