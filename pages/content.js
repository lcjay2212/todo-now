import {
  Button,
  Container,
  Input,
  InputGroup,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";

const Content = () => {
  return (
    <>
      <Container>
        <InputGroup pt="10px">
          <Button>Add</Button>
          <Input type="text" placeholder="Todo-now" />
        </InputGroup>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Todo-now</Th>
              <Th>lists</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
            </Tr>
          </Tbody>
        </Table>
      </Container>
    </>
  );
};

export default Content;
