import { Provider } from "react-redux";
import { store } from "./src/store";
import Navigation from "./src/components/Navigation";
import PersistLogin from "./src/contexts/PersistLogin";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar />
        <PersistLogin>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Navigation />
          </GestureHandlerRootView>
        </PersistLogin>
      </SafeAreaProvider>
    </Provider>
  );
}
