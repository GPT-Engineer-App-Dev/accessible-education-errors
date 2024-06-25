import { Box, Heading, Text, VStack, FormControl, FormLabel, Input } from "@chakra-ui/react";

const AccessibilityError3 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Missing Form Labels</Heading>
      <Text>
        This page demonstrates an accessibility error where form inputs are missing labels. Labels are important for screen readers to describe the purpose of form fields to users who are visually impaired.
      </Text>
      <form>
        <Input type="text" placeholder="Name" />
        <Input type="email" placeholder="Email" />
      </form>
      <Text>
        The form inputs above are missing labels, making them inaccessible to users who rely on screen readers.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The form inputs below include labels, making them accessible to users who rely on screen readers.
      </Text>
      <form>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" type="text" placeholder="Name" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" type="email" placeholder="Email" />
        </FormControl>
      </form>
    </VStack>
  </Box>
);

export default AccessibilityError3;