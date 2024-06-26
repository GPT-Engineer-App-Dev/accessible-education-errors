import { Box, Flex, Link, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="brand.800" color="white" p={4}>
    <Flex justify="space-around">
      <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }} _activeLink={{ color: "white", fontWeight: "bold" }} fontSize="lg" fontWeight="bold">
        Startseite
      </Link>
      <Popover>
        <PopoverTrigger>
          <Button variant="link" color="white" _hover={{ textDecoration: "none" }} fontSize="lg" fontWeight="bold">
            Beispiele
          </Button>
        </PopoverTrigger>
        <PopoverContent bg="white">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Barrierefreiheitsbeispiele</PopoverHeader>
          <PopoverBody color="black">
            <Flex direction="column">
              <Link as={NavLink} to="/accessibility-error-1" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Fehlender Alt-Text
              </Link>
              <Link as={NavLink} to="/accessibility-error-2" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Schlechter Farbkontrast
              </Link>
              <Link as={NavLink} to="/accessibility-error-3" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Fehlende Formularbeschriftungen
              </Link>
              <Link as={NavLink} to="/accessibility-error-4" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Nicht beschreibende Links
              </Link>
              <Link as={NavLink} to="/accessibility-error-5" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Fehlende Dokumentensprache
              </Link>
              <Link as={NavLink} to="/accessibility-error-6" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Fehlende ARIA-Landmarken
              </Link>
              <Link as={NavLink} to="/accessibility-error-7" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Unzugängliche interaktive Elemente
              </Link>
              <Link as={NavLink} to="/accessibility-error-8" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Fehlende Tastaturnavigation
              </Link>
              <Link as={NavLink} to="/accessibility-error-9" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Unzugängliche Tabellen
              </Link>
              <Link as={NavLink} to="/accessibility-error-10" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Fehlende Untertitel für Videos
              </Link>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  </Box>
);

export default Navbar;