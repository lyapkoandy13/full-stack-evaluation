import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { CubeProvider } from "@cubejs-client/react";

import App from "./App";
import theme from "./theme";
import { cubejsClient } from "./cubejs";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <CubeProvider cubejsApi={cubejsClient}>
      <App />
    </CubeProvider>
  </ThemeProvider>,
  document.getElementById("root")
);
