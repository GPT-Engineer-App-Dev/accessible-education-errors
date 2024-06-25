import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AccessibilityError2 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Poor Color Contrast</Heading>
      <Text>
        This page demonstrates an accessibility error where text has poor color contrast with its background. Good color contrast is essential for readability, especially for users with visual impairments.
      </Text>
      <Text color="gray.500" bg="gray.200" p={2}>
        This text has poor color contrast and is difficult to read.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The text below has good color contrast, making it easy to read.
      </Text>
      <Text color="black" bg="white" p={2}>
        This text has good color contrast and is easy to read.
      </Text>
    </VStack>
  </Box>
);

export default AccessibilityError2;