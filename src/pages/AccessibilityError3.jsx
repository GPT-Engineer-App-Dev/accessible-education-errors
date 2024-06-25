import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AccessibilityError3 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Missing Form Labels</Heading>
      <Text>
        This page demonstrates an accessibility error where form inputs are missing labels. Labels are important for screen readers to describe the purpose of form fields to users who are visually impaired.
      </Text>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
      </form>
      <Text>
        The form inputs above are missing labels, making them inaccessible to users who rely on screen readers.
      </Text>
    </VStack>
  </Box>
);

export default AccessibilityError3;