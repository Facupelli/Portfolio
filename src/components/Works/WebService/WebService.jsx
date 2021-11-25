import { Image } from "@chakra-ui/image";
import { Text, Grid, GridItem, Heading, Link, Box } from "@chakra-ui/layout";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";
import { Fade, Slide } from "react-awesome-reveal";

export default function WebService() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" rowGap={5} columnGap={10} pb="5%">
      <GridItem colSpan={4} pb='3%'>
        <Flex justify="center" align="center">
          <Heading as="h5" size="md" mr="0.5%" color="purple.300">
            WEBSERVICE
          </Heading>
          <Link href="https://pf-web-service.vercel.app/" isExternal>
            <IconButton
              variant="text"
              aria-label="external-link"
              icon={<ExternalLinkIcon />}
              ml="0.5%"
            />
          </Link>
        </Flex>
      </GridItem>

      <GridItem colSpan={2} align="right" mt="auto" mb="auto">
        <Slide duration={1500} triggerOnce>
          <Box bg="gray.700" p="5%" borderRadius="5px">
            <Text fontSize="lg" w="60%" color="gray.100">
              This was my last project at Henry Bootcamp, I worked with 7
              teammates both in the FRONT-END and BACK-END to create this app.
              WebService is a service e-commerce where you can offer or buy a
              service.
            </Text>
          </Box>
        </Slide>
      </GridItem>

      <GridItem colSpan={2} align="left">
        <Slide triggerOnce>
          <Image
            w="530px"
            h="300px"
            objectFit="cover"
            borderRadius="5px"
            boxShadow="7px -7px 0 -3px #2D3748, 7px -7px #9DECF9,
            14px -14px 0 -3px #2D3748, 14px -14px #ED64A6"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785254/webservice_1_hs8uig.png"
            alt="landing"
          />
        </Slide>
      </GridItem>

      <GridItem colSpan={2} align="right">
        <Slide duration={1500} triggerOnce>
          <Image
            w="530px"
            h="300px"
            objectFit="cover"
            borderRadius="5px"
            boxShadow="-7px -7px 0 -3px #1A202C, -7px -7px #9DECF9,
            -14px -14px 0 -3px #1A202C, -14px -14px #ED64A6"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785253/webservice_2_goezem.png"
            alt="landing"
          />
        </Slide>
      </GridItem>

      {/* <GridItem colSpan={1} align="right">
        <Image
          w="300px"
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_3_vd7kaj.png"
          alt="landing"
        />
      </GridItem> */}

      <GridItem colSpan={2} align="left" mt="auto" mb="auto">
        <Slide triggerOnce>
          <Box bg="gray.700" p="5%" borderRadius="5px">
            <Text fontSize="lg" w="60%" color="gray.100">
              The technologies we used for this project were React, Redux,
              Material UI among other libraries for the FRONT-END. Node.js,
              Express, Sequelize and PSQL for the BACK-END. Other tools we used
              were Git, Github, Heroku and Vercel. We also worked with SCRUM
              methodology.
            </Text>
          </Box>
        </Slide>
      </GridItem>

      <GridItem colSpan={2} align="right" mt="auto" mb="auto">
        <Slide duration={1500} triggerOnce>
          <Box bg="gray.700" p="5%" borderRadius="5px">
            <Text fontSize="lg" w="60%" color="gray.100">
              In the app you can post a service, add a service to favourites,
              buy a service and then rate it among other functions. As the Admin
              user you can view all kind of statistics related to users and to
              the services offered.
            </Text>
          </Box>
        </Slide>
      </GridItem>

      {/* <GridItem colSpan={1} align="cenleftter">
        <Image
          w="300px"
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785253/webservice_4_bm6mog.png"
          alt="landing"
        />
      </GridItem> */}

      <GridItem colSpan={2} align="cenleftter">
        <Slide triggerOnce>
          <Image
            w="530px"
            h="300px"
            objectFit="cover"
            borderRadius="5px"
            boxShadow="7px -7px 0 -3px #2D3748, 7px -7px #9DECF9,
            14px -14px 0 -3px #2D3748, 14px -14px #ED64A6"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_5_injoqw.png"
            alt="landing"
          />
        </Slide>
      </GridItem>
    </Grid>
  );
}
