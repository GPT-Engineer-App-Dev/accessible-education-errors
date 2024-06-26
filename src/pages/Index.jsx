// Update this page (the content is just a fallback if you fail and example)
// Use chakra-ui
import { Container, Text, VStack, Link, Button, SimpleGrid } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

// Example of using react-icons
// import { FaRocket } from "react-icons/fa";
// <IconButton aria-label="Add" icon={<FaRocket />} size="lg" />; // IconButton would also have to be imported from chakra

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="brand.100">
      <VStack spacing={4}>
        <Text fontSize="2xl" color="green.800">Accessibility Examples</Text>
        <Text color="green.700">Explore different accessibility errors and learn how to fix them.</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Button as={NavLink} to="/accessibility-error-1" colorScheme="green" variant="outline">
            Missing Alt Text
          </Button>
          <Button as={NavLink} to="/accessibility-error-2" colorScheme="green" variant="outline">
            Poor Color Contrast
          </Button>
          <Button as={NavLink} to="/accessibility-error-3" colorScheme="green" variant="outline">
            Missing Form Labels
          </Button>
          <Button as={NavLink} to="/accessibility-error-4" colorScheme="green" variant="outline">
            Non-Descriptive Links
          </Button>
          <Button as={NavLink} to="/accessibility-error-5" colorScheme="green" variant="outline">
            Missing Document Language
          </Button>
          <Button as={NavLink} to="/accessibility-error-6" colorScheme="green" variant="outline">
            Missing ARIA Landmarks
          </Button>
          <Button as={NavLink} to="/accessibility-error-7" colorScheme="green" variant="outline">
            Inaccessible Interactive Elements
          </Button>
          <Button as={NavLink} to="/accessibility-error-8" colorScheme="green" variant="outline">
            Missing Keyboard Navigation
          </Button>
          <Button as={NavLink} to="/accessibility-error-9" colorScheme="green" variant="outline">
            Inaccessible Tables
          </Button>
          <Button as={NavLink} to="/accessibility-error-10" colorScheme="green" variant="outline">
            Missing Captions for Videos
          </Button>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;