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
        <Text fontSize="2xl" color="accent.800">Accessibility Examples</Text>
        <Text color="accent.700">Explore different accessibility errors and learn how to fix them.</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Button as={NavLink} to="/accessibility-error-1" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Missing Alt Text
          </Button>
          <Button as={NavLink} to="/accessibility-error-2" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Poor Color Contrast
          </Button>
          <Button as={NavLink} to="/accessibility-error-3" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Missing Form Labels
          </Button>
          <Button as={NavLink} to="/accessibility-error-4" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Non-Descriptive Links
          </Button>
          <Button as={NavLink} to="/accessibility-error-5" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Missing Document Language
          </Button>
          <Button as={NavLink} to="/accessibility-error-6" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Missing ARIA Landmarks
          </Button>
          <Button as={NavLink} to="/accessibility-error-7" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Inaccessible Interactive Elements
          </Button>
          <Button as={NavLink} to="/accessibility-error-8" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Missing Keyboard Navigation
          </Button>
          <Button as={NavLink} to="/accessibility-error-9" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Inaccessible Tables
          </Button>
          <Button as={NavLink} to="/accessibility-error-10" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Missing Captions for Videos
          </Button>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;