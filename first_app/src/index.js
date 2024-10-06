import React from "react";
import ReactDOM from "react-dom/client";
// import {App} from "./app.js" ;
import App from "./app";
import SimpleComponent from "./testComponent";
const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
        <SimpleComponent/>
        <h1> Welcome to React js</h1>
    </React.StrictMode>
);