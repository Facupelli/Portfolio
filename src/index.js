import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  gray: {
    900: "#171923",
    800: "#1A202C",
    700: "#2D3748",
    600: "#4A5568",
    500: "#718096",
  },
};

const fonts = {
  body: "system-ui, sans-serif",
  heading: "Georgia, serif",
  mono: "Menlo, monospace",
};

const theme = extendTheme({ colors, fonts });

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
