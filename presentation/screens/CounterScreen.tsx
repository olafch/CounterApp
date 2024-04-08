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
			<Pressable onPress={increaseCounter} onLongPress={resetCounter}>
				<Text>+1</Text>
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
});
