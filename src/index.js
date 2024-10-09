import React from "react";
import ReactDOM from "react-dom";
import ConnectWithAllButton from "./Content";

const body = document.body;
const container = document.createElement("div");
body.appendChild(container);

// Render the React component into the container
ReactDOM.render(<ConnectWithAllButton />, container);
