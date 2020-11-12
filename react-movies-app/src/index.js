import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { NavBar } from "./components/NavBar";

const rootElement = document.getElementById("root");
const navBarElement = document.getElementById("nav-bar");
ReactDOM.render(
    <NavBar />, 
    navBarElement
);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>, 
    rootElement
);
