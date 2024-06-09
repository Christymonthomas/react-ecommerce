import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./context/auth";
import App from "./App.js";
import "./index.css";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
