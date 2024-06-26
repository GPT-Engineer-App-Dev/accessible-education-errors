import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseProvider } from "./integrations/supabase/index.js";

const colors = {
  brand: {
    900: "#1A202C", // Darker shade for backgrounds
    800: "#2D3748", // Dark shade for headers
    700: "#4A5568", // Medium shade for text
    600: "#718096", // Lighter shade for secondary text
    500: "#A0AEC0", // Light shade for borders
    400: "#CBD5E0", // Lighter shade for backgrounds
    300: "#E2E8F0", // Lightest shade for backgrounds
    200: "#EDF2F7", // Lightest shade for backgrounds
    100: "#F7FAFC", // Lightest shade for backgrounds
  },
  accent: {
    900: "#D69E2E", // Darker accent color (yellow)
    800: "#ECC94B", // Dark accent color (yellow)
    700: "#F6E05E", // Medium accent color (yellow)
    600: "#FAF089", // Lighter accent color (yellow)
    500: "#F7FAFC", // Light accent color (yellow)
    400: "#FEEBC8", // Lighter accent color (yellow)
    300: "#FBD38D", // Lightest accent color (yellow)
    200: "#F6AD55", // Lightest accent color (yellow)
    100: "#ED8936", // Lightest accent color (yellow)
  },
  background: {
    100: "#F7FAFC", // Light background color
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SupabaseProvider>
        <App />
      </SupabaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);