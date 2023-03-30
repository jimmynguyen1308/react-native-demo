import React from "react"
import { FlatList, Text, View, Image, TouchableOpacity } from "react-native"
import { Icon } from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import tw from "tailwind-react-native-classnames"

const data = [
  {
    id: "1",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "2",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
]

export default function NavOptions() {
  const navigation = useNavigation()

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item: any) => item.id}
      renderItem={({ item }: any) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
        >
          <View>
            <Image
              source={{ uri: item.image }}
              style={{ width: 120, height: 120 }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              name="arrowright"
              color="white"
              type="antdesign"
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
            />
          </View>
        </TouchableOpacity>
      )}
    />
  )
}
