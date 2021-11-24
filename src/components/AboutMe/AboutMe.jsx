import React from "react";
import { Grid, GridItem, Text, Heading, Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

export default function AboutMe() {
  return (
    <Box>
      <Box ml="10%" mb="5%">
        <Heading as="h4" size="lg">
          About Me
        </Heading>
      </Box>
      <Grid templateColumns="repeat(2, 1fr)" gap={10} m="5%">
        <GridItem colSpan={1} align="right" mt="auto" mb="auto" ml="15%">
          <Text w="70%" align="left">
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
        <GridItem colSpan={1} align="Left">
          <Image
            w="250px"
            h="270px"
            objectFit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637793310/foto1-min_opt_obfq5t.png"
            alt="landing"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
