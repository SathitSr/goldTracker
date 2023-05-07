import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/feature/Home/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./src/storage/store";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Home />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}
