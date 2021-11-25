import React from "react";
import { VStack, Heading, Box, Text } from "@chakra-ui/react";
import ContactMe from "./ContactMe/ContactMe";

export default function Name() {
  return (
    <Box pl="10%" pt="5%">
      <Box>
        <Heading as="h6" size="xs" color="black">
          Hi, my name is
        </Heading>
        <Heading as="h2" size="2xl" color="black" isTruncated>
          Facundo Pellicer.
        </Heading>
        <Heading as="h4" size="lg" color="black" isTruncated>
          Full Stack Developer
        </Heading>
      </Box>

      <Box mt="2%" w="35%">
        <Text fontSize="md" color="black">
          I'm a developer with great team work ability. I'm always trying to
          learn from everything I see and from other people. I love being
          autodidact and I'm very curious. I also love mountains (I live near Cordillera de los Andes) and making
          homemade beer 🍻
        </Text>
      </Box>
      <Box mt="2%">
        <ContactMe />
      </Box>
    </Box>
  );
}
