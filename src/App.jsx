import { Provider } from "react-redux";
import store from "./redux/store";
import MainContent from "./components/routes/Routes";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
