import React from "react";
import { Box } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export default function AboutMe() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={5} m='5%'>
      <GridItem colSpan={2} align="center">
        <Box w="60%">
          Hello, my name is Facundo and I enjoy creating things since I was a
          child. I used to create motion graphics for enterpise videos. Then,
          while I was studying Industrial Design at Universidad Nacional de San
          Juan I worked designing AutoCad plans for a metallurgical workshop. I
          always loved technology and making things with the internet so I
          decided to start learning web development at Henry Bootcamp. I am now
          graduated and looking for my first opportunity to contribute on
          challenging projects with everything I have learned and still learning
          everyday.
        </Box>
      </GridItem>
      <GridItem colSpan={1} align="center">
        <Image
          w="250px"
          h="270px"
          objectFit="cover"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637793310/foto1-min_opt_obfq5t.png"
          alt="landing"
        />
      </GridItem>
    </Grid>
  );
}
