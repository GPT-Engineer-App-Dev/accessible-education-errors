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
    900: "#1A365D", // Darker accent color (blue)
    800: "#1E429F", // Dark accent color (blue)
    700: "#2A69AC", // Medium accent color (blue)
    600: "#3182CE", // Lighter accent color (blue)
    500: "#4299E1", // Light accent color (blue)
    400: "#63B3ED", // Lighter accent color (blue)
    300: "#90CDF4", // Lightest accent color (blue)
    200: "#BEE3F8", // Lightest accent color (blue)
    100: "#EBF8FF", // Lightest accent color (blue)
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
