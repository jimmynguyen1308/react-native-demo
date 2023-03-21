import * as React from "react"
import { Button, Text, View, ScrollView } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import ButtonSection from "./ButtonSection"
import InputSection from "./InputSection"
import { RootStackParamList } from "../../types/stack.types"
import { globals } from "../../styles/globals"

type HomeScreenTypes = {
  navigation: NavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({ navigation }: HomeScreenTypes) {
  return (
    <ScrollView style={globals.container}>
      <InputSection />
      <ButtonSection />
      <Button
        title="Go to Jane's profile"
        onPress={() => navigation.navigate("Profile", { name: "Jane" })}
      />
    </ScrollView>
  )
}
