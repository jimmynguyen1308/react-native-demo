import * as React from "react"
import {
  StyleSheet,
  Alert,
  Button,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native"

export default function ButtonSection() {
  const [count1, setCount1] = React.useState<number>(0)
  const [count2, setCount2] = React.useState<number>(0)
  return (
    <View style={styles.section}>
      <View style={styles.flexContainer}>
        <Text style={styles.heading}>Button Section</Text>
        <Button
          title="Help?"
          onPress={() =>
            Alert.alert(
              "Instructions",
              "Press button to increase count. Long press button to reset to 0.",
              [{ text: "OK, got it!" }]
            )
          }
        />
      </View>
      <Text style={{ marginBottom: 20 }}>
        Illustrating different types of buttons, including: Button,
        TouchableHighlight and TouchableOpacity.
      </Text>
      <View style={styles.flexContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => setCount1(count1 + 1)}
          onLongPress={() => setCount1(0)}
          underlayColor="#ef47f3"
        >
          <Text style={styles.buttonText}>{`Count: ${count1}`}</Text>
        </TouchableHighlight>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setCount2(count2 + 1)}
          onLongPress={() => setCount2(0)}
          activeOpacity={0.5}
        >
          <Text style={styles.buttonText}>{`Count: ${count2}`}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  section: {
    // flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
  },
  flexContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    width: "40%",
    padding: 10,
    alignItems: "center",
    backgroundColor: "#ef476f",
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
