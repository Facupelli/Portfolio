import React from "react";
import { VStack, Heading, Box, Text } from "@chakra-ui/react";
import ContactMe from "./ContactMe/ContactMe";


export default function Name() {
  return (
    <Box p="10%" mb='3%' opacity='80%'>
      <VStack spacing={0} align="left" >
        <Box>
          <Heading as="h6" size="xs" color='black'>
            Hi, my name is
          </Heading>
        </Box>
        <Box>
          <Heading as="h2" size="2xl" color='black' isTruncated>
            Facundo Pellicer.
          </Heading>
        </Box>
        <Box>
          <Heading as="h4" size="lg" color='black' isTruncated>
            Full Stack Developer
          </Heading>
        </Box>
      </VStack>
      <Box mt="3%" w="35%">
        <Text fontSize="md" color='black'>
          I'm a developer with great team work ability. I'm always trying to
          learn from everything I see and from other people. I love being
          autodidact and I'm very curious. I also make homemade beer 🍻
        </Text>
      </Box>
      <Box mt='2%'>
        <ContactMe />
      </Box>
    </Box>
  );
}
