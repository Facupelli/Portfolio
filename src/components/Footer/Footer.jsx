import React from "react";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export default function Footer() {
  return (
    <Flex bg="gray.600" justify="center" mt="5%" pt="5%" pb="2%">
      <Box>
        <Link
          href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/"
          isExternal
        >
          <Button variant="ghost">Linkedin</Button>
        </Link>
      </Box>
      <Box>
        <Link
          href="https://github.com/Facupelli"
          isExternal
        >
          <Button variant="ghost">Github</Button>
        </Link>
      </Box>
      <Box>
        <Link
          href="https://www.instagram.com/facu_pellicer/"
          isExternal
        >
          <Button variant="ghost">Instagram</Button>
        </Link>
      </Box>
    </Flex>
  );
}
