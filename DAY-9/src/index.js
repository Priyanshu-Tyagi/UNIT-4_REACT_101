import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import AppContextProviderComponent, { AppContext } from "./Context/AppContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
console.log(`App`, <App />);
root.render(
  <StrictMode>
    <AppContextProviderComponent>
      {/* wrapped App around it */}
      <App />
    </AppContextProviderComponent>
  </StrictMode>
);
