import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#0D1B2A", // Darker shade for backgrounds
    800: "#1B263B", // Dark shade for headers
    700: "#415A77", // Medium shade for text
    600: "#778DA9", // Lighter shade for secondary text
    500: "#E0E1DD", // Light shade for borders
    400: "#F4F4F9", // Lighter shade for backgrounds
    300: "#F8F9FA", // Lightest shade for backgrounds
    200: "#FDFDFD", // Lightest shade for backgrounds
    100: "#FFFFFF", // Lightest shade for backgrounds
  },
  accent: {
    900: "#7B341E", // Darker accent color
    800: "#9B2C2C", // Dark accent color
    700: "#C53030", // Medium accent color
    600: "#E53E3E", // Lighter accent color
    500: "#F56565", // Light accent color
    400: "#FC8181", // Lighter accent color
    300: "#FEB2B2", // Lightest accent color
    200: "#FED7D7", // Lightest accent color
    100: "#FFF5F5", // Lightest accent color
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
