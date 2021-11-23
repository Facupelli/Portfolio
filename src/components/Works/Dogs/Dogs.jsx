import { Image } from "@chakra-ui/image";
import { Box, Center, Grid, GridItem, Heading } from "@chakra-ui/layout";
import React from "react";

export default function Dogs() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={5}>
      <GridItem colSpan={1} align="center">
        <Heading as="h6" size="md">
          THE DOG APP
        </Heading>{" "}
      </GridItem>

      <GridItem colSpan={1} align="center">
        <Image
          w="530px"
          h="300px"
          objectFit="cover"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={1} align="center">
        <Heading as="h6" size="md">
          HOME
        </Heading>{" "}
      </GridItem>

      <GridItem colSpan={1} align="center">
          <Image
            w="530px"
            h="300px"
            objectFit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711315/home_pidogs_fgczln.png"
            alt="landing"
          />
      </GridItem>

      <GridItem colSpan={1} align="center">
        <Heading as="h6" size="md">
          FORM
        </Heading>{" "}
      </GridItem>

      <GridItem colSpan={1} align="center">
          <Image
            w="530px"
            h="300px"
            objectFit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711182/createbreed_pidogs_j2ehkg.png"
            alt="landing"
          />
      </GridItem>
    </Grid>
  );
}


