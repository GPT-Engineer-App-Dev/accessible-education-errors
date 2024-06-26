import { Box, Flex, Link, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="brand.800" color="white" p={4}>
    <Flex justify="space-around">
      <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }} _activeLink={{ color: "white", fontWeight: "bold" }} fontSize="lg" fontWeight="bold">
        Home
      </Link>
      <Popover>
        <PopoverTrigger>
          <Button variant="link" color="white" _hover={{ textDecoration: "none" }} fontSize="lg" fontWeight="bold">
            Examples
          </Button>
        </PopoverTrigger>
        <PopoverContent bg="white">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Accessibility Examples</PopoverHeader>
          <PopoverBody color="black">
            <Flex direction="column">
              <Link as={NavLink} to="/accessibility-error-1" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Missing Alt Text
              </Link>
              <Link as={NavLink} to="/accessibility-error-2" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Poor Color Contrast
              </Link>
              <Link as={NavLink} to="/accessibility-error-3" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Missing Form Labels
              </Link>
              <Link as={NavLink} to="/accessibility-error-4" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Non-Descriptive Links
              </Link>
              <Link as={NavLink} to="/accessibility-error-5" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Missing Document Language
              </Link>
              <Link as={NavLink} to="/accessibility-error-6" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Missing ARIA Landmarks
              </Link>
              <Link as={NavLink} to="/accessibility-error-7" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Inaccessible Interactive Elements
              </Link>
              <Link as={NavLink} to="/accessibility-error-8" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Missing Keyboard Navigation
              </Link>
              <Link as={NavLink} to="/accessibility-error-9" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Inaccessible Tables
              </Link>
              <Link as={NavLink} to="/accessibility-error-10" _hover={{ textDecoration: "none" }} _activeLink={{ color: "brand.900", fontWeight: "bold" }}>
                Missing Captions for Videos
              </Link>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  </Box>
);

export default Navbar;