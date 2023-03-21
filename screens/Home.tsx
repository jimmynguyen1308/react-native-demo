import { Button, Text } from "react-native"
import { NavigationProp } from "@react-navigation/native"
import { RootStackParamList } from "../types/stack.types"

type HomeScreenTypes = {
  navigation: NavigationProp<RootStackParamList, "Home">
}

export default function HomeScreen({ navigation }: HomeScreenTypes) {
  return (
    <Button
      title="Go to Jane's profile"
      onPress={() => navigation.navigate("Profile", { name: "Jane" })}
    />
  )
}
