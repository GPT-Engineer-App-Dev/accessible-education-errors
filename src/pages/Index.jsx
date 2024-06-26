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
        <Text fontSize="2xl" color="brand.800">Barrierefreiheitsbeispiele</Text>
        <Text color="brand.700">Erkunden Sie verschiedene Barrierefreiheitsfehler und lernen Sie, wie Sie diese beheben können.</Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4}>
          <Button as={NavLink} to="/accessibility-error-1" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Fehlender Alt-Text
          </Button>
          <Button as={NavLink} to="/accessibility-error-2" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Schlechter Farbkontrast
          </Button>
          <Button as={NavLink} to="/accessibility-error-3" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Fehlende Formularbeschriftungen
          </Button>
          <Button as={NavLink} to="/accessibility-error-4" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Nicht beschreibende Links
          </Button>
          <Button as={NavLink} to="/accessibility-error-5" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Fehlende Dokumentensprache
          </Button>
          <Button as={NavLink} to="/accessibility-error-6" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Fehlende ARIA-Landmarken
          </Button>
          <Button as={NavLink} to="/accessibility-error-7" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Unzugängliche interaktive Elemente
          </Button>
          <Button as={NavLink} to="/accessibility-error-8" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Fehlende Tastaturnavigation
          </Button>
          <Button as={NavLink} to="/accessibility-error-9" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Unzugängliche Tabellen
          </Button>
          <Button as={NavLink} to="/accessibility-error-10" colorScheme="accent" variant="outline" whiteSpace="normal" textAlign="center" padding="8px" minWidth="150px" maxWidth="200px">
            Fehlende Untertitel für Videos
          </Button>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;