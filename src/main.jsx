import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { SupabaseProvider } from "./integrations/supabase/index.js";
import newBackgroundTexture from "../public/images/new-background-texture.jpg";

const colors = {
  brand: {
    900: "#8B4513", // SaddleBrown for headers
    800: "#A0522D", // Sienna for headers
    700: "#D2B48C", // Tan for text
    600: "#DEB887", // BurlyWood for text
    500: "#F5DEB3", // Wheat for text
    400: "#FFE4B5", // Moccasin for text
    300: "#FFEBCD", // BlanchedAlmond for text
    200: "#FFF8DC", // Cornsilk for text
    100: "#FAF0E6", // Linen for text
  },
  accent: {
    900: "#CD853F", // Peru for links
    800: "#D2691E", // Chocolate for links
    700: "#8B4513", // SaddleBrown for links
    600: "#A0522D", // Sienna for links
    500: "#D2B48C", // Tan for links
    400: "#DEB887", // BurlyWood for links
    300: "#F5DEB3", // Wheat for links
    200: "#FFE4B5", // Moccasin for links
    100: "#FFEBCD", // BlanchedAlmond for links
  },
  background: {
    100: "#C0C0C0", // Cedar background color
  },
};

const theme = extendTheme({
  colors,
  fonts: { body: "Georgia, serif", heading: "Georgia, serif" },
  styles: {
    global: {
      body: {
        bgImage: `url(${newBackgroundTexture})`,
        bgSize: "cover",
        bgRepeat: "no-repeat",
        color: "brand.700",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <SupabaseProvider>
        <App />
      </SupabaseProvider>
    </ChakraProvider>
  </React.StrictMode>
);