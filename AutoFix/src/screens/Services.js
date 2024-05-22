import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState, memo, Component } from "react";
import axios from "axios";
import { storeApiKey, getApiKey, fetchData } from "../Auth/Auth";
import HomeHeader from "../components/HomeHeader";
 
export default function Services() {
  //  useEffect(() => {
  //    const options = {
  //      headers: {
  //        "content-type": "application/json",
  //        "x-apikey": "381db213165f47d86d61d25469c979fc2e753",
  //        "cache-control": "no-cache",}
  //     //  },
  //     //  params: {
  //     //    category: "all",
  //     //    count: "1",
  //     //  },
  //    };
  //    axios
  //      .get("https://autofix-e7a9.restdb.io/rest/json", options)
  //      .then((response) => {
  //         console.log('-------------')

  //         console.log(response.data);

  //      })
  //      .catch((error) => {
  //        console.log(error);
  //      });
  //  }, []);
  const fetchGetCredentials = async (username,password) => {
    console.log(itemData);

    query = `{"username":"${username}","password":"${password}"}`;
    const options = {
      headers: {
        "content-type": "application/json",
        "x-apikey": "381db213165f47d86d61d25469c979fc2e753",
        "cache-control": "no-cache",},
      // },
      // //  },
      // params: {
    
      //   username:"admin"
      // },
    };
    axios
      .get("https://autofix-e7a9.restdb.io/rest/json?q=" + query, options)
      .then((response) => {
 
        console.log("-------2------ ");

        console.log(response.data._id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const removeByIndex = (array, index) => {
    const narray = array;
    narray.splice(index, 1);
    return narray;
  };
  const myList = [1, 2, 3, 4, 5];
  console.log(removeByIndex(myList, 0));
  // const onSubmit = async itemData => {
  //     console.log(itemData);
  //     const url = `https://autofix-e7a9.restdb.io/rest/json/664e0bda3b9f077800001b21`;
  //     const { data } = await axios.put(
  //       url,
  //       // { name: "super" },
  //       { cars:  [] },
  //       {
  //         headers: {
  //           "content-type": "application/json",
  //           "x-apikey": "381db213165f47d86d61d25469c979fc2e753",
  //           "cache-control": "no-cache",
  //         },
  //       }
  //     );}

  //onSubmit() 
storeApiKey("user id ");
 

// fetchData()
//   .then((apiKey) => {
//     console.log('user id',apiKey)
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });
 

 
 









  return (
    <View style={styles.container}>
      <HomeHeader />
      <Text>Cars Screen!</Text>

      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },

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
