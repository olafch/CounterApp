import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
	centerContainer: {
		alignItems: "center",
		flex: 1,
		justifyContent: "center",
	},
  title: {
    fontSize: 80,
    fontWeight: "300",
    color: "black"
  },
  fabRight: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  fabLeft: {
    position: 'absolute',
    margin: 16,
    left: 0,
    bottom: 0,
  },
});
