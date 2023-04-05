import { StyleSheet, Text, View } from "react-native"
import React from "react"
import { useSelector } from "react-redux"
import { selectOrigin } from "../store/navSlice"
import MapView, { Marker } from "react-native-maps"
import tw from "tailwind-react-native-classnames"

export default function Map() {
  const origin = useSelector(selectOrigin)

  return (
    <MapView
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.7882, // origin.location.latitude
        longitude: -122.4324, // origin.location.longitude
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {
        //origin?.location && (   // if origin location exists
        <Marker
          coordinate={{
            latitude: 37.7882, // origin.location.latitude
            longitude: -122.4324, // origin.location.longitude
          }}
        />
        //)
      }
    </MapView>
  )
}

const styles = StyleSheet.create({})
