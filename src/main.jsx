import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseProvider } from "./integrations/supabase/index.js";

const colors = {
  brand: {
    900: "#ff6600", // Bright orange for headers
    800: "#ff6600", // Bright orange for headers
    700: "#000000", // Black for text
    600: "#000000", // Black for text
    500: "#000000", // Black for text
    400: "#000000", // Black for text
    300: "#000000", // Black for text
    200: "#000000", // Black for text
    100: "#000000", // Black for text
  },
  accent: {
    900: "#0000ff", // Blue for links
    800: "#0000ff", // Blue for links
    700: "#0000ff", // Blue for links
    600: "#0000ff", // Blue for links
    500: "#0000ff", // Blue for links
    400: "#0000ff", // Blue for links
    300: "#0000ff", // Blue for links
    200: "#0000ff", // Blue for links
    100: "#0000ff", // Blue for links
  },
  background: {
    100: "#f6f6ef", // Light beige background color
  },
};

const theme = extendTheme({ colors, fonts: { body: "Arial, sans-serif", heading: "Arial, sans-serif" } });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SupabaseProvider>
        <App />
      </SupabaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);