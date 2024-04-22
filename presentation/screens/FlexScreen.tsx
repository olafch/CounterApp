import { StyleSheet, Text, View } from "react-native";

export const FlexScreen = () => {
	return (
		<View style={styles.container}>
			{/* <Text>FlexScreen</Text> */}
			<View style={styles.box1}></View>
			<View style={styles.box2}></View>
			<View style={styles.box3}></View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "gray",
	},
	box1: {
		backgroundColor: "#5856D6",
		flex: 1,
	},
	box2: {
		backgroundColor: "#4240A2",
		flex: 2,
	},
	box3: {
		backgroundColor: "#2E2D71",
		flex: 3,
	},
});
