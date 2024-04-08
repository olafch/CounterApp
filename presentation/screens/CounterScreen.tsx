import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

interface CounterState {
	initialValue?: number;
}

export const CounterScreen = () => {
	const [counter, setCounter] = useState(10);

	const increaseCounter = () => {
		setCounter(counter + 1);
	};

	const resetCounter = () => {
		setCounter(0);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{counter}</Text>
			<Pressable
				style={({ pressed }) => [
					styles.button,
					pressed && styles.buttonPressed,
				]}
				onPress={increaseCounter}
				onLongPress={resetCounter}
			>
				<Text style={{ color: "white" }}>Increment</Text>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontSize: 80,
		color: "black",
		fontWeight: "300",
	},
	button: {
		backgroundColor: "#5856D6",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 10,
	},
	buttonPressed: {
		backgroundColor: "#4746AB",
	},
});
