import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

import { store } from "./store/Store.jsx";
import { Provider } from "react-redux";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { SocketProvider } from "./context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <SocketProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SocketProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
