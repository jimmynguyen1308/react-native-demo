import { Image, Text, View } from "react-native"
import { NavigationProp, RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../types/stack.types"
import { globals } from "../styles/globals"

type ProfileScreenTypes = {
  navigation: NavigationProp<RootStackParamList, "Profile">
  route: RouteProp<any>
}

export default function ProfileScreen({
  navigation,
  route,
}: ProfileScreenTypes) {
  return (
    <View style={globals.container}>
      <Image
        source={require("../assets/icon.png")}
        // source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
        style={{ width: 100, height: 100 }}
      />
      <Text>This is {route.params?.name}'s profile</Text>
    </View>
  )
}
