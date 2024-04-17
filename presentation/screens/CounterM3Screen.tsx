import { useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../theme/global.styles";
import { FAB } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons"; //IMPORTANTE ESTO

interface CounterState {
	initialValue?: number;
}

export const CounterM3Screen = () => {
	const [counter, setCounter] = useState(10);

	return (
		<View style={globalStyles.centerContainer}>
			<Text style={globalStyles.title}>{counter}</Text>
			<Icon name='accessibility-outline' size={35} />
			<FAB
				label='+1'
				style={globalStyles.fab}
				onPress={() => setCounter(counter + 1)}
				onLongPress={() => setCounter(0)}
			/>
		</View>
	);
};
