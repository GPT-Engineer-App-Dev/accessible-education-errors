import { Box, Heading, Text, VStack, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const AccessibilityError9 = () => (
  <Box p={4}>
    <VStack spacing={4} align="start">
      <Heading as="h1" size="xl">Accessibility Error: Inaccessible Tables</Heading>
      <Text>
        This page demonstrates an accessibility error where tables are missing headers. Table headers are important for screen readers to describe the structure and content of the table.
      </Text>
      <Table variant="simple">
        <Tbody>
          <Tr>
            <Td>Row 1, Cell 1</Td>
            <Td>Row 1, Cell 2</Td>
          </Tr>
          <Tr>
            <Td>Row 2, Cell 1</Td>
            <Td>Row 2, Cell 2</Td>
          </Tr>
        </Tbody>
      </Table>
      <Text>
        The table above is missing headers, making it inaccessible to users who rely on screen readers.
      </Text>
      <Heading as="h2" size="lg">Good Example</Heading>
      <Text>
        The table below includes headers, making it accessible to users who rely on screen readers.
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Header 1</Th>
            <Th>Header 2</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>Row 1, Cell 1</Td>
            <Td>Row 1, Cell 2</Td>
          </Tr>
          <Tr>
            <Td>Row 2, Cell 1</Td>
            <Td>Row 2, Cell 2</Td>
          </Tr>
        </Tbody>
      </Table>
    </VStack>
  </Box>
);

export default AccessibilityError9;