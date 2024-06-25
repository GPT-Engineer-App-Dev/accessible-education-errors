import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AccessibilityError6 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Missing ARIA Landmarks</Heading>
      <Text>
        This page demonstrates an accessibility error where ARIA landmarks are missing. ARIA landmarks help screen readers to navigate the page structure more efficiently.
      </Text>
      <Text>
        The page below is missing ARIA landmarks, making it difficult for screen readers to navigate.
      </Text>
      <Box border="1px solid black" p={4}>
        <Text>Content without ARIA landmarks</Text>
      </Box>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The page below includes ARIA landmarks, making it easier for screen readers to navigate.
      </Text>
      <Box border="1px solid black" p={4} role="main">
        <Text>Content with ARIA landmarks</Text>
      </Box>
    </VStack>
  </Box>
);

export default AccessibilityError6;