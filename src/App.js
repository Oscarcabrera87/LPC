import React from "react";
import "./App.css";
import Main from "./Components/Main"
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'

const store = ConfigureStore()

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Main className="App" />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
