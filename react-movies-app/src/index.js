import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { NavBar } from "./components/NavBar";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./reducers";

import { PersistGate } from 'redux-persist/integration/react';

import configureStore from './store';
import { MainFooter } from "./components/MainFooter";
const store = configureStore();


const rootElement = document.getElementById("root");
const navBarElement = document.getElementById("nav-bar");

ReactDOM.render(
    <NavBar />,
    navBarElement
);

ReactDOM.render(
    <Provider store={store.store}>
        <PersistGate loading={null} persistor={store.persistor}>
            <BrowserRouter>
                <App />
                <MainFooter />
            </BrowserRouter>
        </PersistGate>
    </Provider>,
    rootElement
);