import { View, Text, StyleSheet } from "react-native";

export const PositionScreen = () => {
	return (
		<View style={styles.container}>
			<View style={styles.purpleBox}></View>
			<View
				style={{ ...styles.purpleBox, top: 50, backgroundColor: "#FOA23B" }}
			></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#28C4D9",
		justifyContent: "center",
		alignItems: "center",
	},
	purpleBox: {
		width: 100,
		height: 100,
		backgroundColor: "#5856D6",
		borderWidth: 10,
		borderColor: "white",
	},
});
