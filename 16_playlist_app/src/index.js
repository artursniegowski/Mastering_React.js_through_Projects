import "bulma/css/bulma.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./store"; // running the index.js file
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <Provider store={store}>
        <React.StrictMode>
                <App />
        </React.StrictMode>
    </Provider>
);
