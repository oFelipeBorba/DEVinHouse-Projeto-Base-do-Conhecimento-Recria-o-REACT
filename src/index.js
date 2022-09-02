import { createRoot } from "react-dom/client";
import { LoginDataProvider } from "./contexts/useLoginData";

import Rotas from "./routes/Rotas";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <LoginDataProvider>
    <Rotas />
  </LoginDataProvider>
);
