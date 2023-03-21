import * as React from "react"
import { Button, Text, View, ScrollView } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import ButtonSection from "./ButtonSection"
import InputSection from "./InputSection"
import ProfileSection from "./NavigationSection"
import { RootStackParamList } from "../../types/stack.types"
import { globals } from "../../styles/globals"

export type HomeScreenTypes = {
  navigation: NavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({ navigation }: HomeScreenTypes) {
  return (
    <ScrollView style={globals.container}>
      <InputSection />
      <ButtonSection />
      <ProfileSection navigation={navigation} />
    </ScrollView>
  )
}
