import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from "react-native";
import AddToDo from "./add";
import { useSelector, useDispatch } from "react-redux";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "TO-DO APP" }}
        />
        <Stack.Screen name="Add" component={AddToDo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  //   const [count, setCount] = React.useState(0);

  const todos = useSelector((state) => state.allTodo);
  const dispatch = useDispatch();

  //   React.useLayoutEffect(() => {
  //     navigation.setOptions({
  //       headerRight: () => (
  //         <Button
  //           onPress={() => {
  //             dispatch({ type: "ADD_TODO", payload: { content: "test" } });
  //           }}
  //           title="Update count"
  //         />
  //       ),
  //     });
  //   }, [navigation]);

  return (
    <View style={styles.background}>
      <View>
        <Text style={styles.title}>To-do list:</Text>
        {todos.map((txt, index) => (
          // <Text key={index} style={styles.itemContainer}>
          //   {txt}
          // </Text>
          // make a row of text and a button
          <View key={index} style={styles.itemContainer}>
            <Text>{txt}</Text>
            <Button
              title="Delete"
              onPress={() => {
                Alert.alert("Delete task", "Are you sure?", [
                  {
                    text: "Yes",
                    onPress: () => {
                      dispatch({ type: "DELETE_TODO", payload: { index } });
                    },
                  },
                  {
                    text: "No",
                    onPress: () => {
                      console.log("No Pressed");
                    },
                  },
                ]);
              }}
            ></Button>
          </View>
        ))}
      </View>
      <View>
        <Button
          title="Add new task"
          onPress={() => navigation.navigate("Add")}
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#cef",
    // alignItems: "center",
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    // borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 20,
  },
});

export default MyStack;
