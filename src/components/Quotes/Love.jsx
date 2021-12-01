import { Heading, Box, Flex } from "@chakra-ui/layout";
import React from "react";

export default function Love() {
  return (
    <Flex justify="center" align="center">
      <Box mt='10%' mb='10%' p={5} boxShadow="7px -7px 0 -3px #2D3748, 7px -7px #9DECF9,
            14px -14px 0 -3px #2D3748, 14px -14px #ED64A6,
            -7px 7px 0 -3px #2D3748, -7px 7px #9DECF9,
            -14px 14px 0 -3px #2D3748, -14px 14px #ED64A6
            "         
            >
        <Heading as="h4" size="lg" color="gray.300">
          Love what you do
        </Heading>
      </Box>
    </Flex>
  );
}
