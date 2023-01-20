import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context";
import { store } from "../src/redux/store/store";
import { Provider } from "react-redux";
import "react-modern-drawer/dist/index.css";
import { CartProvider } from "react-use-cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ContextProvider>
      <CartProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </CartProvider>
    </ContextProvider>
  </BrowserRouter>
);
