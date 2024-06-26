import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" p={4}>
    <Flex justify="space-around">
      <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
        Home
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
      <Link as={NavLink} to="/accessibility-error-11" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
        Missing Focus Indicators
      </Link>
      <Link as={NavLink} to="/accessibility-error-12" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
        Placeholder as Label
      </Link>
      <Link as={NavLink} to="/accessibility-error-13" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
        Inaccessible Dropdowns
      </Link>
    </Flex>
  </Box>
);

export default Navbar;