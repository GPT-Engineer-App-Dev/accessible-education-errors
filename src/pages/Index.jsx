// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Link, Button, SimpleGrid } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="background.100">
      <VStack spacing={4}>
        <Text fontSize="2xl" color="brand.800">Accessibility Examples</Text>
        <Text color="brand.700">Explore various accessibility errors and learn how to fix them.</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Button as={NavLink} to="/accessibility-error-1" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Missing Alt Text
          </Button>
          <Button as={NavLink} to="/accessibility-error-2" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Poor Color Contrast
          </Button>
          <Button as={NavLink} to="/accessibility-error-3" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Missing Form Labels
          </Button>
          <Button as={NavLink} to="/accessibility-error-4" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Non-Descriptive Links
          </Button>
          <Button as={NavLink} to="/accessibility-error-5" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Missing Document Language
          </Button>
          <Button as={NavLink} to="/accessibility-error-6" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Missing ARIA Landmarks
          </Button>
          <Button as={NavLink} to="/accessibility-error-7" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Inaccessible Interactive Elements
          </Button>
          <Button as={NavLink} to="/accessibility-error-8" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Missing Keyboard Navigation
          </Button>
          <Button as={NavLink} to="/accessibility-error-9" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Inaccessible Tables
          </Button>
          <Button as={NavLink} to="/accessibility-error-10" colorScheme="brand" variant="solid" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px" _hover={{ bg: "brand.700", color: "white" }}>
            Missing Captions for Videos
          </Button>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;