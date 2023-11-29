import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductProvider from "./Contexts/ProductContext.jsx";
import SidebarProvider from "./Contexts/SidebarContext.jsx";
import CartProvider from "./Contexts/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <SidebarProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </SidebarProvider>
    </CartProvider>
  </React.StrictMode>
);
