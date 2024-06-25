import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AccessibilityError4 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Non-Descriptive Links</Heading>
      <Text>
        This page demonstrates an accessibility error where links are non-descriptive. Descriptive link text is important for screen readers to convey the purpose of the link to users who are visually impaired.
      </Text>
      <a href="#">Click here</a>
      <Text>
        The link above is non-descriptive and does not convey its purpose to users who rely on screen readers.
      </Text>
    </VStack>
  </Box>
);

export default AccessibilityError4;