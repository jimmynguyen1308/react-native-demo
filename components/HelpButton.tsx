import { Alert, Button, Text, View } from "react-native"

type HelpButtonTypes = {
  title: string
  description: string
  buttons: Array<{ text: string }>
}

export default function HelpButton({
  title,
  description,
  buttons,
}: HelpButtonTypes) {
  return (
    <Button
      title="Help?"
      onPress={() => Alert.alert(title, description, buttons)}
    />
  )
}
