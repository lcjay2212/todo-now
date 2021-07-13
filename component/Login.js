import { useEffect, useState } from "react";
import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";

import Link from "next/link";

const Login = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [username, setUsername] = useState("");
  console.log(username);
  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            borderTopRadius="md"
            bg="#3182ce"
            color="white"
            fontWeight="bold"
          >
            Log-in
          </ModalHeader>
          <ModalBody>
            <Text mb={2}>Username</Text>
            <Input
              placeholder="Enter your username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></Input>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => {}}>
              Log-in
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login;
