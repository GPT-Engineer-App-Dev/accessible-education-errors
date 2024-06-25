import { Box, Flex, Link, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" p={4}>
    <Flex justify="space-around">
      <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
        Home
      </Link>
      <Popover>
        <PopoverTrigger>
          <Button variant="link" color="white" _hover={{ textDecoration: "none" }}>
            Examples
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Accessibility Examples</PopoverHeader>
          <PopoverBody>
            <Flex direction="column">
              <Link as={NavLink} to="/accessibility-error-1" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
                Missing Alt Text
              </Link>
              <Link as={NavLink} to="/accessibility-error-2" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
                Poor Color Contrast
              </Link>
              <Link as={NavLink} to="/accessibility-error-3" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
                Missing Form Labels
              </Link>
              <Link as={NavLink} to="/accessibility-error-4" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
                Non-Descriptive Links
              </Link>
              <Link as={NavLink} to="/accessibility-error-5" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
                Missing Document Language
              </Link>
              <Link as={NavLink} to="/accessibility-error-6" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
                Missing ARIA Landmarks
              </Link>
              <Link as={NavLink} to="/accessibility-error-7" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
                Inaccessible Interactive Elements
              </Link>
              <Link as={NavLink} to="/accessibility-error-8" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
                Missing Keyboard Navigation
              </Link>
              <Link as={NavLink} to="/accessibility-error-9" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
                Inaccessible Tables
              </Link>
              <Link as={NavLink} to="/accessibility-error-10" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
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