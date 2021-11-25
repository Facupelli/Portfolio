import { Image } from "@chakra-ui/image";
import { Text, Grid, GridItem, Heading, Flex } from "@chakra-ui/layout";
import React from "react";
import { IconButton, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Fade,
  Zoom,
} from "react-awesome-reveal";

export default function Dogs() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" rowGap={5} columnGap={10} mb="5%">
      <GridItem colSpan={2} align="center">
        <Flex justify="center" align="center">
          <Fade triggerOnce>
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
          </Fade>
        </Flex>
      </GridItem>

      <GridItem colSpan={1} align="right" mt="auto" mb="auto">
        <Zoom delay={250} triggerOnce>
          <Text fontSize="md" w="60%">
            This was my first full stack experience at Henry Bootcamp. The Dogg
            App is a SPA (Single Page Application) that consumes data of an API
            (The Dog API). In the app you can find all dogs breeds, search
            breeds by name, filter breeds by temperaments and order them by
            weight or alphabetically.
          </Text>
        </Zoom>
      </GridItem>

      <GridItem  colSpan={1} align="left">
        <Zoom delay={500} triggerOnce>
          <Image
            w="530px"
            h="300px"
            objectFit="cover"
            borderRadius="10px"
            boxShadow="md"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png"
            alt="landing"
          />
        </Zoom>
      </GridItem>

      <GridItem colSpan={1} align="right">
        <Zoom delay={500} triggerOnce>
          <Image
            w="530px"
            h="300px"
            objectFit="cover"
            borderRadius="10px"
            boxShadow="md"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711315/home_pidogs_fgczln.png"
            alt="landing"
          />
        </Zoom>
      </GridItem>

      <GridItem colSpan={1} align="left" mt="auto" mb="auto">
        <Zoom delay={250} triggerOnce>
          <Text fontSize="md" w="60%">
            The technologies I used for this project were React, Redux and pure
            CSS for the FRONT-END, Node.js, Express, Sequelize and PSQL for the
            BACK-END. Other tools I used were Git, Github, Heroku and Vercel.
          </Text>
        </Zoom>
      </GridItem>

      <GridItem colSpan={1} align="right" mt="auto" mb="auto">
        <Zoom delay={250} triggerOnce>
          <Text fontSize="md" w="60%">
            In the app you can create a breed selecting some characteristics and
            a photo. The new breed created is stored in the database. You can
            then filter by API breeds or your own breeds.
          </Text>
        </Zoom>
      </GridItem>

      <GridItem colSpan={1} align="cenleftter">
        <Zoom delay={500} triggerOnce>
          <Image
            w="530px"
            h="300px"
            objectFit="cover"
            borderRadius="10px"
            boxShadow="md"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711182/createbreed_pidogs_j2ehkg.png"
            alt="landing"
          />
        </Zoom>
      </GridItem>
    </Grid>
  );
}
