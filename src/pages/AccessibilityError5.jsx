import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AccessibilityError5 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Missing Document Language</Heading>
      <Text>
        This page demonstrates an accessibility error where the document language is not specified. Specifying the document language is important for screen readers to correctly interpret and read the content.
      </Text>
      <Text>
        The document language is not specified in the HTML tag, making it difficult for screen readers to interpret the content correctly.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The HTML tag below specifies the document language, making it accessible to users who rely on screen readers.
      </Text>
      <Text as="pre">
        {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <p>Content goes here.</p>
</body>
</html>`}
      </Text>
    </VStack>
  </Box>
);

export default AccessibilityError5;