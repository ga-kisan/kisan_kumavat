import { Provider } from "react-redux";

import AppRouter from "./routes/AppRouter";
import store from "./redux/Store";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
