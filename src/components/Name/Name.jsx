import React from "react";
import { Button, VStack, Heading, Box, Text } from "@chakra-ui/react";

export default function Name() {
  return (
    <Box m="10%">
      <VStack spacing={0} align="left">
        <Box>
          <Heading as="h6" size="xs">
            Hi, my name is
          </Heading>
        </Box>
        <Box>
          <Heading as="h2" size="2xl" isTruncated>
            Facundo Pellicer.
          </Heading>
        </Box>
        <Box>
          <Heading as="h4" size="lg" isTruncated>
            Full Stack Developer
          </Heading>
        </Box>
      </VStack>
      <Box mt="3%" w="35%">
        <Text fontSize="md">
          I'm a developer with great team work ability. I'm always trying to
          learn from everything I see and from other people. I love being
          autodidact and I'm very curios. I also make homemade beer 🍻
        </Text>
      </Box>
      <Box mt='2%'>
        <Button variant='outline' >Get In Touch</Button>
      </Box>
    </Box>
  );
}
