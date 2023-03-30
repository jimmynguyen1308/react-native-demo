import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native"
import tw from "tailwind-react-native-classnames"
import NavOptions from "../components/NavOptions"

export default function Mapscreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          // source={require("../assets/icon.png")}
          source={{ uri: "https://links.papareact.com/gzs" }}
          style={{ width: 100, height: 100, resizeMode: "contain" }}
        />
        <Text>Map views</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
