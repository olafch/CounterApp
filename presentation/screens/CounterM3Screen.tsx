import { useState } from "react";
import { Text, View } from "react-native";
import { globalStyles } from "../theme/global.styles";
import { FAB } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons"; //IMPORTANTE ESTO

interface CounterState {
	initialValue?: number;
}

export const CounterM3Screen = () => {
	const [counter, setCounter] = useState(100);
	const { title, fabLeft, fabRight, centerContainer } = globalStyles;

	return (
		<View style={centerContainer}>
			<Icon name='logo-react' size={35} />
			<Text style={title}>{counter}</Text>
			<FAB
				style={fabRight}
				onPress={() => setCounter(counter + 1)}
				onLongPress={() => setCounter(0)}
				// label='+1'
				icon='add-outline'
			/>
			<FAB
				style={fabLeft}
				onPress={() => setCounter(counter - 1)}
				onLongPress={() => setCounter(0)}
				// label='+1'
				icon='remove-outline'
			/>
		</View>
	);
};
