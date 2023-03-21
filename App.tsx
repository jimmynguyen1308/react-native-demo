import * as React from "react"
import { Alert, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/Home"
import ProfileScreen from "./screens/Profile"
import { RootStackParamList } from "./types/stack.types"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#303030",
          },
          headerTintColor: "#ffffff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Dashboard",
            headerRight: () => (
              <Button
                onPress={() => Alert.alert("You pressed the button")}
                title="Info"
                color="#ffffff"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({
            title: route.params.name + "'s Profile",
            headerStyle: {
              backgroundColor: "#ef476f",
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
