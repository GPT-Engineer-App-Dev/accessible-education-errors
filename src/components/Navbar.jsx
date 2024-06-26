import { Box, Flex, Link, Popover, PopoverTrigger, PopoverContent, PopoverArrow, PopoverCloseButton, PopoverHeader, PopoverBody, Button } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const linkStyle = {
    _hover: { textDecoration: "none" },
    fontSize: "lg",
    fontWeight: "bold",
  };

  const activeLinkStyle = {
    color: "white",
    fontWeight: "bold",
    borderBottom: "2px solid white",
  };

  return (
    <Box bg="brand.900" color="white" p={4}>
      <Flex justify="space-around">
        <Link
          as={NavLink}
          to="/"
          {...linkStyle}
          _activeLink={activeLinkStyle}
          isActive={() => location.pathname === "/"}
        >
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
                <Link
                  as={NavLink}
                  to="/accessibility-error-1"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-1"}
                >
                  Missing Alt Text
                </Link>
                <Link
                  as={NavLink}
                  to="/accessibility-error-2"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-2"}
                >
                  Poor Color Contrast
                </Link>
                <Link
                  as={NavLink}
                  to="/accessibility-error-3"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-3"}
                >
                  Missing Form Labels
                </Link>
                <Link
                  as={NavLink}
                  to="/accessibility-error-4"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-4"}
                >
                  Non-Descriptive Links
                </Link>
                <Link
                  as={NavLink}
                  to="/accessibility-error-5"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-5"}
                >
                  Missing Document Language
                </Link>
                <Link
                  as={NavLink}
                  to="/accessibility-error-6"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-6"}
                >
                  Missing ARIA Landmarks
                </Link>
                <Link
                  as={NavLink}
                  to="/accessibility-error-7"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-7"}
                >
                  Inaccessible Interactive Elements
                </Link>
                <Link
                  as={NavLink}
                  to="/accessibility-error-8"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-8"}
                >
                  Missing Keyboard Navigation
                </Link>
                <Link
                  as={NavLink}
                  to="/accessibility-error-9"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-9"}
                >
                  Inaccessible Tables
                </Link>
                <Link
                  as={NavLink}
                  to="/accessibility-error-10"
                  {...linkStyle}
                  _activeLink={activeLinkStyle}
                  isActive={() => location.pathname === "/accessibility-error-10"}
                >
                  Missing Captions for Videos
                </Link>
              </Flex>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Box>
  );
};

export default Navbar;