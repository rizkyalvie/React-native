import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useTheme } from "native-base";
import Todos from "./src/screens/ToDoList";

const Stack = createStackNavigator();

export default function Container() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Todos} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}