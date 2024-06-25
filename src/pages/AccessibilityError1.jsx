import { Box, Heading, Text, VStack, Image } from "@chakra-ui/react";

const AccessibilityError1 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Missing Alt Text</Heading>
      <Text>
        This page demonstrates an accessibility error where images are missing alt text. Alt text is important for screen readers to describe images to users who are visually impaired.
      </Text>
      <Image src="https://via.placeholder.com/150" alt="" />
      <Text>
        The image above is missing alt text. This makes it inaccessible to users who rely on screen readers.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The image below includes alt text, making it accessible to users who rely on screen readers.
      </Text>
      <Image src="https://via.placeholder.com/150" alt="Placeholder image with alt text" />
    </VStack>
  </Box>
);

export default AccessibilityError1;