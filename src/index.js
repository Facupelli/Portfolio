import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  purple: {
    900: "#322659",
    800: "#44337A",
    700: "#553C9A",
    600: "#6B46C1",
    500: "#805AD5",
    200: "#D6BCFA",
    100: "#E9D8FD",
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
