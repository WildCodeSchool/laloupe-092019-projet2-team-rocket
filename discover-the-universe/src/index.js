import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Components/rootReducers";
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(rootReducer);

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
	, document.getElementById('root'));

