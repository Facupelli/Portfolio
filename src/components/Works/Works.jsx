import { Image } from "@chakra-ui/image";
import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/layout";
import React from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";


export default function Works() {
  return (
    <Box>
      <Box ml="10%" mb='5%' >
        <Heading as="h4" size="lg">
          Works
        </Heading>
      </Box>
      
      <Dogs />

      <WebService />
    </Box>
  );
}
