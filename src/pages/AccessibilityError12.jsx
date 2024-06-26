import { Box, Heading, Text, VStack, Input } from "@chakra-ui/react";

const AccessibilityError12 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Placeholder as Label</Heading>
      <Text>
        This page demonstrates an accessibility error where placeholders are used as labels. Placeholders should not be used as a replacement for labels because they disappear when the user starts typing, making it difficult for users to remember the purpose of the field.
      </Text>
      <Input placeholder="Name" />
      <Text>
        The input above uses a placeholder as a label, making it inaccessible to users who rely on screen readers.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The input below includes a proper label, making it accessible to users who rely on screen readers.
      </Text>
      <Box>
        <label htmlFor="name">Name</label>
        <Input id="name" placeholder="Enter your name" />
      </Box>
    </VStack>
  </Box>
);

export default AccessibilityError12;