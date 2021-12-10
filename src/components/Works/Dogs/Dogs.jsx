import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

export default function Dogs() {
  return (
    <div templateColumns="repeat(2, 1fr)" rowGap={5} columnGap={10} mb="5%">
      <div colSpan={2} align="center" pb="3%">
        <div justify="center" align="center">
          <Fade triggerOnce>
            <h5 as="h5" size="md" color="purple.300">
              THE DOG APP
            </h5>
            <link href="https://pi-dogs-definitive.vercel.app/" isExternal>
              <button
                variant="text"
                aria-label="external-link"
                icon={<ExternalLinkIcon />}
                ml="0.5%"
              />
            </link>
          </Fade>
        </div>
      </div>

      <div
        colSpan={1}
        align="right"
        mt="auto"
        mb="auto"
        borderRadius="10px"
        bg="violet.200"
      >
        <Slide duration={1500} triggerOnce>
          <div bg="gray.700" p="5%" borderRadius="5px">
            <p fontSize="lg" w="70%" color="gray.100">
              This was my first full stack experience at Henry Bootcamp. The
              Dogg App is a SPA (Single Page Application) that consumes data of
              an API (The Dog API). In the app you can find all dogs breeds,
              search breeds by name, filter breeds by temperaments and order
              them by weight or alphabetically.
            </p>
          </div>
        </Slide>
      </div>

      <div colSpan={1} align="left">
        <Slide triggerOnce>
          <div>
            <image
              w="530px"
              h="300px"
              objectFit="cover"
              borderRadius="5px"
              boxShadow="7px -7px 0 -3px #2D3748, 7px -7px #9DECF9,
            14px -14px 0 -3px #2D3748, 14px -14px #ED64A6"
              src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png"
              alt="landing"
            />
          </div>
        </Slide>
      </div>

      <div colSpan={1} align="right">
        <Slide duration={1500} triggerOnce>
          <div>
            <image
              w="530px"
              h="300px"
              objectFit="cover"
              borderRadius="5px"
              boxShadow="-7px -7px 0 -3px #1A202C, -7px -7px #9DECF9,
            -14px -14px 0 -3px #1A202C, -14px -14px #ED64A6"
              src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711315/home_pidogs_fgczln.png"
              alt="landing"
            />
          </div>
        </Slide>
      </div>

      <div colSpan={1} align="left" mt="auto" mb="auto">
        <Slide triggerOnce>
          <div bg="gray.700" p="5%" borderRadius="5px">
            <p fontSize="lg" w="70%" color="gray.100">
              The technologies I used for this project were React, Redux and
              pure CSS for the FRONT-END. Node.js, Express, Sequelize and PSQL
              for the BACK-END. Other tools I used were Git, Github, Heroku and
              Vercel.
            </p>
          </div>
        </Slide>
      </div>

      <div colSpan={1} align="right" mt="auto" mb="auto">
        <Slide duration={1500} triggerOnce>
          <div bg="gray.700" p="5%" borderRadius="5px">
            <p fontSize="lg" w="70%" color="gray.100">
              You can create a breed selecting some characteristics and a photo.
              The new breed created is stored in the database. You can then
              filter by API breeds or your own breeds.
            </p>
          </div>
        </Slide>
      </div>

      <div colSpan={1} align="cenleftter">
        <Slide triggerOnce>
          <image
            w="530px"
            h="300px"
            objectFit="cover"
            borderRadius="5px"
            boxShadow="7px -7px 0 -3px #2D3748, 7px -7px #9DECF9,
            14px -14px 0 -3px #2D3748, 14px -14px #ED64A6"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637711182/createbreed_pidogs_j2ehkg.png"
            alt="landing"
          />
        </Slide>
      </div>
    </div>
  );
}
