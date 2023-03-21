import * as React from "react"
import { Alert, Button } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "./screens/Home"
import ProfileScreen from "./screens/Profile"
import { RootStackParamList } from "./types/stack.types"
import { StatusBar } from "expo-status-bar"

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
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
                  onPress={() =>
                    Alert.alert(
                      "Instructions",
                      "Go through each section of the dashboard. Select a profile to get to a new page.",
                      [{ text: "OK, got it!" }]
                    )
                  }
                  title="Instructions"
                  color="#ffffff"
                />
              ),
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ navigation, route }) => ({
              title: route.params.name + "'s Profile",
              headerStyle: {
                backgroundColor: "#ef476f",
              },
              headerRight: () => (
                <Button
                  onPress={() =>
                    Alert.alert(
                      "Message Alert Title",
                      "Do you want to go back to homepage?",
                      [
                        {
                          text: "No, not yet",
                          style: "cancel",
                        },
                        {
                          text: "Yes please!",
                          onPress: () => navigation.navigate("Home"),
                        },
                      ]
                    )
                  }
                  title="Go Home"
                  color="#ffffff"
                />
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
