import { Provider } from "react-redux";
import { store } from "./src/store";
import Navigation from "./src/components/Navigation";
import PersistLogin from "./src/contexts/PersistLogin";

export default function App() {
  return (
    <Provider store={store}>
      <PersistLogin>
        <Navigation />
      </PersistLogin>
    </Provider>
  );
}
