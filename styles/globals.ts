import { StyleSheet } from "react-native"

export const globals = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
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
