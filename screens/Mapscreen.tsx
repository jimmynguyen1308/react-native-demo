import React from "react"
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native"
import Map from "../components/Map"
import tw from "tailwind-react-native-classnames"

export default function Mapscreen() {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
