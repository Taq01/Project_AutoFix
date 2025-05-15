import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Modal,
  ModalProps,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
import { Picker } from "@react-native-picker/picker";

import React, { useEffect, useState, memo, Component } from "react";
import CarCard from "./CarCard";
 

function Sheet({ isOpen, toggleModal, addNewCar }) {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const [newCar, setNewCar] = useState("");

  const addcar = () => {addNewCar(newCar)};
  const content = (
    <View style={styles.container}>
      <Text
        style={{
          resizeMode: "contain",
        }}
      >
        Close
      </Text>
      <View style={styles.middleView}>
        <Picker
          selectedValue={newCar}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setNewCar(itemValue)}
        >
          <Picker.Item label="mercedes" value="mercedes" />
          <Picker.Item label="Chevrolet" value="Chevrolet" />
          <Picker.Item label="Honda" value="Honda" />
        </Picker>

        <TouchableOpacity style={styles.button} onPress={addcar}>
          <Text style={{ color: "white", fontWeight: 400 }}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dbutton} onPress={toggleModal}>
          <Text style={{ color: "white", fontWeight: 400 }}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    // <View style={styles.container}>
    //   <Text>aaaa</Text>

    // </View>
    <Modal
      visible={isOpen}
      transparen
      animationType={"fade"}
      statusBarTranslucent
      onRequestClose={toggleModal}
    >
      {content}
    </Modal>
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
  dbutton: {
    alignItems: "center",
    backgroundColor: "red",
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
export default Sheet;
