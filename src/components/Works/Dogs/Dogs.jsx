import { Image } from "@chakra-ui/image";
import { Text, Grid, GridItem, Heading, Flex } from "@chakra-ui/layout";
import React from "react";
import { IconButton, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Dogs() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={5} mb="5%">
      <GridItem colSpan={2} align="center">
        <Flex justify="center" align="center">
          <Heading as="h5" size="md">
            THE DOG APP
          </Heading>
          <Link href="https://pi-dogs-definitive.vercel.app/" isExternal>
            <IconButton
              variant="text"
              aria-label="external-link"
              icon={<ExternalLinkIcon />}
              ml="0.5%"
            />
          </Link>
        </Flex>
      </GridItem>

      <GridItem colSpan={1} align="right" mt="auto" mb="auto">
        <Text fontSize="md" w="60%">
          This was my first full stack experience at Henry Bootcamp. The Dogg
          App is a SPA (Single Page Application) that consumes data of an API
          (The Dog API). In the app you can find all dogs breeds, search breeds
          by name, filter breeds by temperaments and order them by weight or
          alphabetically.
        </Text>
      </GridItem>

      <GridItem colSpan={1} align="left">
        <Image
          w="530px"
          h="300px"
          objectFit="cover"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={1} align="right">
        <Image
          w="530px"
          h="300px"
          objectFit="cover"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711315/home_pidogs_fgczln.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={1} align="left" mt="auto" mb="auto">
        <Text fontSize="md" w="60%">
          The technologies I used for this project were React, Redux and pure
          CSS for the FRONT-END, Node.js, Express, Sequelize and PSQL for the
          BACK-END. Other tools I used were Git, Github, Heroku and Vercel.
        </Text>
      </GridItem>

      <GridItem colSpan={1} align="right" mt="auto" mb="auto">
        <Text fontSize="md" w="60%">
          In the app you can create a breed selecting some characteristics and a
          photo. The new breed created is stored in the database. You can then
          filter by API breeds or your own breeds.
        </Text>
      </GridItem>

      <GridItem colSpan={1} align="cenleftter">
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
