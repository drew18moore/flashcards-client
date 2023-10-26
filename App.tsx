import { Provider } from "react-redux";
import { store } from "./src/store";
import Navigation from "./src/components/Navigation";
import PersistLogin from "./src/contexts/PersistLogin";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar />
      <PersistLogin>
        <Navigation />
      </PersistLogin>
    </Provider>
  );
}
