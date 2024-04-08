import { SafeAreaView } from "react-native";
import { HelloWorldScreen } from "./presentation/screens/HelloWorldScreen";
import { CounterScreen } from "./presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";

export default function App() {
	return (
		<PaperProvider>
			<SafeAreaView style={{ flex: 1 }}>
				{/* <HelloWorldScreen name='Olaf Chwolka' /> */}
				<CounterScreen />
			</SafeAreaView>
		</PaperProvider>
	);
}
