import { StyleSheet } from "react-native"

export const globals = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 20,
  },
  section: {
    // flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    marginBottom: 20,
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
})
