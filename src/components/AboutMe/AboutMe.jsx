import React from "react";
import { Grid, GridItem, Text, Heading, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export default function AboutMe() {
  return (
    <Box pt='5%' bg='gray.700'>
      <Box ml="10%">
        <Heading as="h4" size="lg" color='gray.300'>
          About Me
        </Heading>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={10} p="5%">
        <GridItem colSpan={1} align="right" mt="auto" mb="auto" ml="15%">
          <Text w="70%" align="left" color="gray.100">
            Hello, my name is Facundo and I enjoy creating things since I was a
            child. I used to create motion graphics for enterpise videos. Then,
            while I was studying Industrial Design at Universidad Nacional de
            San Juan I worked designing AutoCad plans for a metallurgical
            workshop. I always loved technology and making things with the
            internet so I decided to start learning web development at Henry
            Bootcamp. I am now graduated and looking for my first opportunity to
            contribute on challenging projects with everything I have learned
            and still learning everyday.
          </Text>
        </GridItem>
        <GridItem colSpan={1} align="Left" mt="auto" mb="auto">
          <Image
            w="250px"
            h="270px"
            borderRadius='5px'
            border='3px solid #1A202C'
            boxShadow='7px -7px 0 -3px #2D3748, 7px -7px #4A5568,
            14px -14px 0 -3px #2D3748, 14px -14px #CBD5E0'
            objectFit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637793310/foto1-min_opt_obfq5t.png"
            alt="landing"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
