import { useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../theme/global.styles";

interface CounterState {
	initialValue?: number;
}

export const CounterM3Screen = () => {
	const [counter, setCounter] = useState(10);

	return (
		<View style={globalStyles.centerContainer}>
			<Text style={globalStyles.title}>{counter}</Text>
		</View>
	);
};
