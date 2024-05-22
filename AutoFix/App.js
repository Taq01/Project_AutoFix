import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from './src/screens/Login';
import Home from "./src/screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Services from "./src/screens/Services";
import Octicons from "@expo/vector-icons/Octicons";
const Tab = createBottomTabNavigator();

const Stack =createNativeStackNavigator()
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>AutoFix!</Text>

    //   <StatusBar style="auto" />
    // </View>

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeHead" component={HomeTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function HomeTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Services}
        options={{
          tabBarLabel: "Services",
          tabBarIcon: ({ color, size }) => (
            <Octicons name="tools" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
