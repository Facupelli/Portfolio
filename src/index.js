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
  gray: {
    900: "#171923",
    800: "#1A202C",
    700: "#2D3748",
    600: "#4A5568",
    500: "#718096",
    400: "#A0AEC0",
    300: "#CBD5E0",
    200: "#E2E8F0",
    100: "#EDF2F7",
  },
  cyan: {
    500: "#00B5D8",
    400: "#ED64A6",
    300: "#76E4F7",
    200: "#9DECF9",
    100: "#C4F1F9",
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
