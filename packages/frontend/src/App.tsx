import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { CubeProvider } from "@cubejs-client/react";

import theme from "./theme";
import { cubejsClient } from "./cubejs";
import { Router } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CubeProvider cubejsApi={cubejsClient}>
        <Router />
      </CubeProvider>
    </ThemeProvider>
  );
}

export default App;
