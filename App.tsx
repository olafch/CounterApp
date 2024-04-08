import { SafeAreaView } from "react-native";
import { HelloWorldScreen } from "./presentation/screens/HelloWorldScreen";

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<HelloWorldScreen name='Olaf Chwolka' />
		</SafeAreaView>
	);
}
