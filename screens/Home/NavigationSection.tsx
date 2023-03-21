import * as React from "react"
import { Button, Text, View } from "react-native"
import HelpButton from "../../components/HelpButton"
import { HomeScreenTypes } from "."
import { globals } from "../../styles/globals"

export default function NavigationSection({ navigation }: HomeScreenTypes) {
  return (
    <View style={globals.section}>
      <View style={globals.flexContainer}>
        <Text style={globals.heading}>Navigation</Text>
        <HelpButton
          title="Instructions"
          description="Click on a button to get redirected to either John's or Jane's profile
          page."
          buttons={[{ text: "OK, got it!" }]}
        />
      </View>
      <Text style={{ marginBottom: 20 }}>
        Illustrating the basics of navigation and the navigate process.
      </Text>
      <View style={globals.flexContainer}>
        <Button
          title="John's Profile"
          onPress={() => navigation.navigate("Profile", { name: "John Doe" })}
        />
        <Button
          title="Jane's profile"
          onPress={() => navigation.navigate("Profile", { name: "Jane Doe" })}
        />
      </View>
    </View>
  )
}
