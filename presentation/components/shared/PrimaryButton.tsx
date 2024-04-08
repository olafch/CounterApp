import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
	label: string;
	onPress?: () => void;
	onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
			onPress={() => onPress && onPress()}
			onLongPress={() => onLongPress && onLongPress()}
		>
			<Text style={{ color: "white" }}>{label}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
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
