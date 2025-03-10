/* eslint-disable @typescript-eslint/no-non-null-assertion */

import "./app/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/app";
import { enableMocking } from "./mocks/enableMocking";

enableMocking()
  .then(() => {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>
    );
  })
  .catch((error: unknown) => {
    console.error(error);
  });
