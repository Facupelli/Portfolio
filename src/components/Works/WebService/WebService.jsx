import { Image } from "@chakra-ui/image";
import { Text, Grid, GridItem, Heading } from "@chakra-ui/layout";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/react";

export default function WebService() {
  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={5}>
      <GridItem colSpan={4}>
        <Flex justify="center" align="center">
          <Heading as="h5" size="md" mr="0.5%">
            WebService
          </Heading>
          <IconButton
            variant="text"
            aria-label="external-link"
            icon={<ExternalLinkIcon />}
            ml="0.5%"
          />
        </Flex>
      </GridItem>

      <GridItem colSpan={2} align="right" mt="auto" mb="auto">
        <Text fontSize="md" w="60%">
          This was my last project at Henry Bootcamp, I worked with 7 teammates
          both in the FRONT-END and BACK-END to create this app. WebService is a
          service e-commerce where you can login to offer or buy a service or
          login as the Admin user.
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
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785253/webservice_2_goezem.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={1} align="right">
        <Image
          w="300px"
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_3_vd7kaj.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={2} align="left" mt="auto" mb="auto">
        <Text fontSize="md" w="60%">
          The technologies we used for this project were React, Redux, Material
          UI among other libraries for the FRONT-END, Node.js, Express,
          Sequelize and PSQL for the BACK-END. Other tools we used were Git,
          Github, Heroku and Vercel. We also worked with SCRUM methodology.
        </Text>
      </GridItem>

      <GridItem colSpan={2} align="right" mt="auto" mb="auto">
        <Text fontSize="md" w="60%">
          In the app you can post a service, add a service to favourites, buy a
          service and then rate it among other functions. As the Admin user you
          can view all kind of statistics related to users and to the services
          offered.
        </Text>
      </GridItem>

      <GridItem colSpan={1} align="cenleftter">
        <Image
          w="300px"
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785253/webservice_4_bm6mog.png"
          alt="landing"
        />
      </GridItem>

      <GridItem colSpan={1} align="cenleftter">
        <Image
          w="300px"
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_5_injoqw.png"
          alt="landing"
        />
      </GridItem>
    </Grid>
  );
}