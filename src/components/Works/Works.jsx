import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/button";


export default function Works() {
  return (
    <Box pt='3%' bg='gray.800'>
      <Box ml="10%" mb="5%">
        <Flex align="baseline">
          <Heading as="h4" size="lg" color='gray.300'>
            Works
          </Heading>
          <TriangleDownIcon ml='1%' color='gray.300'/>
        </Flex>
      </Box>

      <Box>
        <Dogs />

        <WebService />
      </Box>

      
    </Box>
  );
}
