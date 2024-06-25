import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";

const AccessibilityError7 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Inaccessible Interactive Elements</Heading>
      <Text>
        This page demonstrates an accessibility error where interactive elements, such as buttons, are missing accessible names. Accessible names are important for screen readers to describe the purpose of interactive elements.
      </Text>
      <Button>Click me</Button>
      <Text>
        The button above is missing an accessible name, making it inaccessible to users who rely on screen readers.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The button below includes an accessible name, making it accessible to users who rely on screen readers.
      </Text>
      <Button aria-label="Submit form">Click me</Button>
    </VStack>
  </Box>
);

export default AccessibilityError7;