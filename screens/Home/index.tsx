import * as React from "react"
import { StyleSheet, Button, Text, View, ScrollView } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import ButtonSection from "./ButtonSection"
import { RootStackParamList } from "../../types/stack.types"

type HomeScreenTypes = {
  navigation: NavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({ navigation }: HomeScreenTypes) {
  return (
    <ScrollView style={styles.container}>
      <ButtonSection />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  section: {
    flex: 1,
  },
})
