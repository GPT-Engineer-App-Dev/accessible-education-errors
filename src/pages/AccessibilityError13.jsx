import { Box, Heading, Text, VStack, Select } from "@chakra-ui/react";

const AccessibilityError13 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Inaccessible Dropdowns</Heading>
      <Text>
        This page demonstrates an accessibility error where dropdowns are not accessible. Dropdowns should be accessible via keyboard and screen readers.
      </Text>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
      <Text>
        The dropdown above is not accessible to users who rely on screen readers.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The dropdown below is accessible to users who rely on screen readers.
      </Text>
      <Select placeholder="Select option" aria-label="Select an option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    </VStack>
  </Box>
);

export default AccessibilityError13;