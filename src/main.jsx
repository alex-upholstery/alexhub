import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./AuthContext";
import { FavouritesProvider } from "./FavouritesContext";
import "./index.css";
import App from "./App.jsx";
import { CartProvider } from "./pages/CartContext";
import "./pages.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
  <AuthProvider>
    <FavouritesProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </FavouritesProvider>
  </AuthProvider>
</BrowserRouter>
  </StrictMode>,
);
