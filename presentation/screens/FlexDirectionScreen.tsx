import { StyleSheet, Text, View } from "react-native";

export const FlexDirectionScreen = () => {
	return (
		<View style={styles.container}>
			{/* <Text>FlexScreen</Text> */}
			<View style={[styles.box, styles.box1]}></View>
			<View style={[styles.box, styles.box2]}></View>
			<View style={[styles.box, styles.box3]}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#D1D1D1",
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "flex-end",
	},
	box: {
		width: 100,
		height: 100,
	},
	box1: {
		backgroundColor: "#5856D6",
	},
	box2: {
		backgroundColor: "#4240A2",
	},
	box3: {
		backgroundColor: "#2E2D71",
	},
});
