import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MyStack from "./src/home.js";
import AddToDo from "./src/add.js";
import { Provider } from "react-redux";
import store from "./store/index.js";

export default function App() {
  return (
    <Provider store={store}>
      <MyStack></MyStack>
    </Provider>
    // <AddToDo></AddToDo>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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
