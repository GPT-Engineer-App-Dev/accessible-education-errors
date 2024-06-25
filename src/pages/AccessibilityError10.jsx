import { Box, Heading, Text, VStack } from "@chakra-ui/react";

const AccessibilityError10 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Missing Captions for Videos</Heading>
      <Text>
        This page demonstrates an accessibility error where videos are missing captions. Captions are important for users who are deaf or hard of hearing to understand the content of the video.
      </Text>
      <video controls>
        <source src="sample-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Text>
        The video above is missing captions, making it inaccessible to users who are deaf or hard of hearing.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The video below includes captions, making it accessible to users who are deaf or hard of hearing.
      </Text>
      <video controls>
        <source src="sample-video-with-captions.mp4" type="video/mp4" />
        <track kind="captions" src="sample-captions.vtt" srclang="en" label="English" default />
        Your browser does not support the video tag.
      </video>
    </VStack>
  </Box>
);

export default AccessibilityError10;