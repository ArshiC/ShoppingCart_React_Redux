import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducers from "./reducers";
import "bootstrap/dist/css/bootstrap.css";

import {Dashboard} from "../src/container/dashboard/index";
import "./styles.css";


const store = createStore(Reducers);
// console.log("Reducers", Reducers)
export function App() {
  return (
    <Provider store={store}>
      <div className="App container">
        <Dashboard />
      </div>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
