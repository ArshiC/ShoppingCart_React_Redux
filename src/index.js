import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import {Store} from "./store";
import { Dashboard } from "../src/container/dashboard/index";
import "./styles.scss";
export function App() {
	return (
		<Provider store={Store}>
			<div className="App">
				<Dashboard />
			</div>
		</Provider>
	);
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
