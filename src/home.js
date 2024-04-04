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
  console.log(todos);
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
    <View>
      <View>
        <Text>To-do list:</Text>
        {todos.map((txt) => (
          <Text>{txt}</Text>
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

export default MyStack;
