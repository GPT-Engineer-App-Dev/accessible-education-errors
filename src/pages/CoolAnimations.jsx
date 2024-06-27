import { Box, Heading, VStack, keyframes } from "@chakra-ui/react";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const CoolAnimations = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Cool CSS Animations</Heading>
      <Box
        as="div"
        w="100px"
        h="100px"
        bg="brand.700"
        animation={`${spin} infinite 4s linear`}
      />
      <Text>
        The box above is spinning using a CSS animation.
      </Text>
    </VStack>
  </Box>
);

export default CoolAnimations;