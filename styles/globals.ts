import { StyleSheet } from "react-native"

export const globals = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
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
