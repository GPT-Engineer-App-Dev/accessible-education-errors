import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.800" color="white" p={4}>
    <Flex justify="space-around">
      <Link as={NavLink} to="/" _hover={{ textDecoration: "none" }} _activeLink={{ color: "teal.300" }}>
        Home
      </Link>
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
    </Flex>
  </Box>
);

export default Navbar;