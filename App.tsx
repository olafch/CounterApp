import { SafeAreaView } from "react-native";
import { HelloWorldScreen } from "./presentation/screens/HelloWorldScreen";
import { CounterScreen } from "./presentation/screens/CounterScreen";

export default function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* <HelloWorldScreen name='Olaf Chwolka' /> */}
			<CounterScreen />
		</SafeAreaView>
	);
}
