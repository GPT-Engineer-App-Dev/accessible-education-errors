import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AccessibilityError8 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Missing Keyboard Navigation</Heading>
      <Text>
        This page demonstrates an accessibility error where keyboard navigation is missing. Keyboard navigation is essential for users who cannot use a mouse.
      </Text>
      <Text>
        The interactive elements below are not accessible via keyboard, making them inaccessible to users who rely on keyboard navigation.
      </Text>
      <Box tabIndex="-1" p={4} border="1px solid black">
        <Text>Non-focusable content</Text>
      </Box>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The interactive elements below are accessible via keyboard, making them accessible to users who rely on keyboard navigation.
      </Text>
      <Box tabIndex="0" p={4} border="1px solid black">
        <Text>Focusable content</Text>
      </Box>
    </VStack>
  </Box>
);

export default AccessibilityError8;