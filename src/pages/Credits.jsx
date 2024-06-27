import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const Credits = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Credits</Heading>
      <Text>
        This project was made possible by the following contributors:
      </Text>
      <Text>
        - Developer: John Doe
      </Text>
      <Text>
        - Designer: Jane Smith
      </Text>
      <Text>
        - Project Manager: Alice Johnson
      </Text>
    </VStack>
  </Box>
);

export default Credits;