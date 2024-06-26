import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseProvider } from "./integrations/supabase/index.js";

const colors = {
  brand: {
    900: "#7B5804", // Darker shade for backgrounds
    800: "#9C7406", // Dark shade for headers
    700: "#B98F08", // Medium shade for text
    600: "#D6AA0A", // Lighter shade for secondary text
    500: "#F3C50C", // Light shade for borders
    400: "#F7D94E", // Lighter shade for backgrounds
    300: "#FBEF90", // Lightest shade for backgrounds
    200: "#FDF9C2", // Lightest shade for backgrounds
    100: "#FEFDE4", // Lightest shade for backgrounds
  },
  accent: {
    900: "#7B5804", // Darker accent color (yellow)
    800: "#9C7406", // Dark accent color (yellow)
    700: "#B98F08", // Medium accent color (yellow)
    600: "#D6AA0A", // Lighter accent color (yellow)
    500: "#F3C50C", // Light accent color (yellow)
    400: "#F7D94E", // Lighter accent color (yellow)
    300: "#FBEF90", // Lightest accent color (yellow)
    200: "#FDF9C2", // Lightest accent color (yellow)
    100: "#FEFDE4", // Lightest accent color (yellow)
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
