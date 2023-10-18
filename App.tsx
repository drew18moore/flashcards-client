import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <View className="flex-1 justify-center items-center">
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}
