import React from "react";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export default function Footer() {
  return (
    <Flex justify="center" pt="5%" pb="2%" bg="gray.900">
      <Box>
        <Link
          href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <Button color="cyan.200" variant="ghost">
            Linkedin
          </Button>
        </Link>
      </Box>
      <Box>
        <Link
          href="https://github.com/Facupelli"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <Button color="cyan.200" variant="ghost">
            Github
          </Button>
        </Link>
      </Box>
      <Box>
        <Link
          href="https://www.instagram.com/facu_pellicer/"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <Button color="cyan.200" variant="ghost">
            Instagram
          </Button>
        </Link>
      </Box>
    </Flex>
  );
}
