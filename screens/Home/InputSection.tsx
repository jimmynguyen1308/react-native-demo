import * as React from "react"
import {
  StyleSheet,
  Button,
  FlatList,
  Text,
  TextInput,
  View,
} from "react-native"
import HelpButton from "../../components/HelpButton"
import { globals } from "../../styles/globals"

export default function InputSection() {
  const [items, setItems] = React.useState<Array<string>>([
    "one",
    "two",
    "three",
  ])
  const [query, setQuery] = React.useState<string>("")
  const [newItem, setNewItem] = React.useState<string>("")

  const filteredItems = React.useMemo(() => {
    return items.filter((item: string) => {
      return item.toLowerCase().includes(query.toLowerCase())
    })
  }, [items, query])

  const onAddNewItem = () => {
    setItems([...items, newItem])
    setNewItem("")
  }

  return (
    <View style={globals.section}>
      <View style={globals.flexContainer}>
        <Text style={globals.heading}>Text Inputs</Text>
        <HelpButton
          title="Instructions"
          description="Search for FlatList's existing items by typing in the first input and add new items in the second one."
          buttons={[{ text: "OK, got it!" }]}
        />
      </View>
      <Text style={{ marginBottom: 20 }}>
        Illustrating how to handle inputs and events in TextInput and displaying
        the data in FlatList.
      </Text>
      <View style={globals.flexContainer}>
        <TextInput
          style={{ ...styles.textInput, width: "100%" }}
          value={query}
          onChangeText={(text) => setQuery(text)}
          placeholder="Search items..."
        />
      </View>
      <View style={globals.flexContainer}>
        <TextInput
          style={{ ...styles.textInput, width: "80%" }}
          onChangeText={(text) => setNewItem(text)}
          placeholder="Add a new item..."
        />
        <Button title="Add" onPress={onAddNewItem} />
      </View>
      <View style={globals.flexContainer}>
        <TextInput
          style={{ ...styles.textInput, width: "80%" }}
          placeholder="Extra: Numberic text input..."
          keyboardType="numeric"
        />
      </View>
      <FlatList
        style={styles.listContainer}
        data={filteredItems}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: "transparent",
    borderBottomColor: "#ef476f",
    borderWidth: 1,
    padding: 10,
  },
  listContainer: {
    marginBottom: 20,
  },
})
