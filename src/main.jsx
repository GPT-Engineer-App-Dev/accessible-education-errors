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
    900: "#1C4532", // Darker accent color (green)
    800: "#22543D", // Dark accent color (green)
    700: "#276749", // Medium accent color (green)
    600: "#2F855A", // Lighter accent color (green)
    500: "#38A169", // Light accent color (green)
    400: "#48BB78", // Lighter accent color (green)
    300: "#68D391", // Lightest accent color (green)
    200: "#9AE6B4", // Lightest accent color (green)
    100: "#C6F6D5", // Lightest accent color (green)
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
