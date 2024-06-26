import { Box, Heading, Text, VStack, Link } from "@chakra-ui/react";

const AccessibilityError4 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Non-Descriptive Links</Heading>
      <Text>
        This page demonstrates an accessibility error where links are non-descriptive. Descriptive link text is important for screen readers to convey the purpose of the link to users who are visually impaired.
      </Text>
      <Link href="#" _hover={{ textDecoration: "none" }} _activeLink={{ color: "accent.600" }}>
        Click here
      </Link>
      <Text>
        The link above is non-descriptive and does not convey its purpose to users who rely on screen readers.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The link below is descriptive, making it accessible to users who rely on screen readers.
      </Text>
      <Link href="https://example.com" _hover={{ textDecoration: "none" }} _activeLink={{ color: "accent.600" }}>
        Visit our example page
      </Link>
    </VStack>
  </Box>
);

export default AccessibilityError4;