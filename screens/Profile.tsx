import { Button, Text } from "react-native"
import { NavigationProp, RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../types/stack.types"

type ProfileScreenTypes = {
  navigation: NavigationProp<RootStackParamList, "Profile">
  route: RouteProp<any>
}

export default function ProfileScreen({
  navigation,
  route,
}: ProfileScreenTypes) {
  return <Text>This is {route.params?.name}'s profile</Text>
}
