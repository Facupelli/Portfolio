import { Image } from "@chakra-ui/image";
import { Box, Center, Text, Grid, GridItem, Heading } from "@chakra-ui/layout";
import React from "react";

export default function WebService() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={5}>
      <GridItem colSpan={4} align="center">
        <Heading as="h5" size="md">
          WebService
        </Heading>
      </GridItem>

      <GridItem colSpan={2} align="right" mt="auto" mb="auto">
        <Text fontSize="md" w="60%">
          This was my first full stack experience at Henry Bootcamp. The Dogg
          App is a SPA (Single Page Application) that consumes data of an API
          (The Dog API). In the app you can find all dogs breeds, search breeds
          by name, filter breeds by temperaments and order them by weight or
          alphabetically.
        </Text>
      </GridItem>

      <GridItem colSpan={2} align="left">
        <Image
          w="530px"
          h="300px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785254/webservice_1_hs8uig.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={1} align="right">
        <Image
          w="300px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785253/webservice_2_goezem.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={1} align="right">
        <Image
          w="300px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_3_vd7kaj.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={2} align="left" mt="auto" mb="auto">
        <Text fontSize="md" w="60%">
          The technologies I used for this project were React, Redux and pure
          CSS for the FRONT-END, Node.js, Express, Sequelize and PSQL for the
          BACK-END. Other tools I used were Git, Github, Heroku and Vercel.
        </Text>
      </GridItem>

      <GridItem colSpan={2} align="right" mt="auto" mb="auto">
        <Text fontSize="md" w="60%">
          In the app you can create a breed selecting some characteristics and a
          photo. The new breed created is stored in the database. You can then
          filter by API breeds or your own breeds.
        </Text>
      </GridItem>

      <GridItem colSpan={1} align="cenleftter">
        <Image
          w="300px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785253/webservice_4_bm6mog.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={1} align="cenleftter">
        <Image
          w="300px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_5_injoqw.png"
          alt="landing"
        />
      </GridItem>
    </Grid>
  );
}
