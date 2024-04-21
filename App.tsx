import { SafeAreaView } from "react-native";
import { HelloWorldScreen } from "./presentation/screens/HelloWorldScreen";
import { CounterScreen } from "./presentation/screens/CounterScreen";
import { PaperProvider } from "react-native-paper";
import { CounterM3Screen } from "./presentation/screens/CounterM3Screen";
import IonIcon from "react-native-vector-icons/Ionicons";
import { BoxObjectModelScreen } from "./presentation/screens/BoxObjectModelScreen";
import { DimensionScreen } from "./presentation/screens/DimensionScreen";
import { PositionScreen } from "./presentation/screens/PositionScreen";

export default function App() {
	return (
		<PaperProvider
			settings={{
				icon: props => <IonIcon {...props} />,
			}}
		>
			<SafeAreaView style={{ flex: 1 }}>
				{/* <HelloWorldScreen name='Olaf Chwolka' /> */}
				{/* <CounterScreen /> */}
				{/* <CounterM3Screen /> */}
				{/* <BoxObjectModelScreen /> */}
				{/* <DimensionScreen /> */}
				<PositionScreen />
			</SafeAreaView>
		</PaperProvider>
	);
}
