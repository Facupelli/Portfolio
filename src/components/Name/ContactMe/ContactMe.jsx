import { Button } from "@chakra-ui/button";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";

export default function ContactMe() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button variant="solid" color='purple.900' onClick={onOpen}>
        Get In Touch
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact Me</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>E-mail</FormLabel>
              <Input />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Message</FormLabel>
              <Textarea />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Send Message
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
