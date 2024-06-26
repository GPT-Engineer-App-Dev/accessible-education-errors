import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";

const AccessibilityError11 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Missing Focus Indicators</Heading>
      <Text>
        This page demonstrates an accessibility error where interactive elements are missing focus indicators. Focus indicators are important for users who navigate using a keyboard to know which element is currently focused.
      </Text>
      <Button>Click me</Button>
      <Text>
        The button above is missing a focus indicator, making it inaccessible to users who rely on keyboard navigation.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The button below includes a focus indicator, making it accessible to users who rely on keyboard navigation.
      </Text>
      <Button _focus={{ boxShadow: "outline" }}>Click me</Button>
    </VStack>
  </Box>
);

export default AccessibilityError11;