import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a202c", // Darker shade for backgrounds
    800: "#2d3748", // Dark shade for headers
    700: "#4a5568", // Medium shade for text
    600: "#718096", // Lighter shade for secondary text
    500: "#a0aec0", // Light shade for borders
    400: "#cbd5e0", // Lighter shade for backgrounds
    300: "#e2e8f0", // Lightest shade for backgrounds
    200: "#edf2f7", // Lightest shade for backgrounds
    100: "#f7fafc", // Lightest shade for backgrounds
  },
  accent: {
    900: "#7b341e", // Darker accent color
    800: "#9b2c2c", // Dark accent color
    700: "#c53030", // Medium accent color
    600: "#e53e3e", // Lighter accent color
    500: "#f56565", // Light accent color
    400: "#fc8181", // Lighter accent color
    300: "#feb2b2", // Lightest accent color
    200: "#fed7d7", // Lightest accent color
    100: "#fff5f5", // Lightest accent color
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
