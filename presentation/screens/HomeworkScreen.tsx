import { StyleSheet, Text, View } from "react-native";

export const HomeworkScreen = () => {
	return (
		<View style={styles.container}>
			<View style={[styles.box, styles.purpleBox]}></View>
			<View style={[styles.box, styles.orangeBox]}></View>
			<View style={[styles.box, styles.blueBox]}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#28425B",
		//TODO: Tarea
		// justifyContent: "center",
		// justifyContent: "flex-start",
		// flexDirection: "row",
		// justifyContent: "space-between",
		// alignItems: "stretch",
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
	},
	box: {
		// width: 100,
		width: 100,
		height: 100,
		// height: 100,
		borderWidth: 10,
		borderColor: "white",
	},
	purpleBox: {
		backgroundColor: "#5856D6",
		// alignSelf: "flex-end",
		// flex: 1,
		// position: "absolute",
	},
	orangeBox: {
		backgroundColor: "#F0A23B",
		// flex: 1,
		// alignSelf: "center",
		// flex: 1,
		// left: 100,
		// position: "absolute",
		// left: 265,
		top: 50,
	},
	blueBox: {
		backgroundColor: "#28C4D9",
		// alignSelf: "center",
		// width: "100%",
		// flex: 2,
		// position: "absolute",
		// bottom: 270,
	},
});
