import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">About</Heading>
      <Text>
        This project is a demonstration of accessibility best practices and cool CSS animations.
      </Text>
      <Text>
        Our goal is to create a web application that is both visually appealing and accessible to all users.
      </Text>
    </VStack>
  </Box>
);

export default About;