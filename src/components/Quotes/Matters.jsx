import { Heading, Box, Flex } from "@chakra-ui/layout";
import React from "react";
import s from "./Matters.module.css";

export default function Matters() {
  return (
    <Flex justify="center" align="center">
      <Box className={s.box} mt="10%" mb="10%" p={5}>
        <Heading as="h4" size="lg" color="gray.300">
          What matters is how much love you put into what you do
        </Heading>
      </Box>
    </Flex>
  );
}
