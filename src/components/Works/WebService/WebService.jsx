import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon } from "@heroicons/react/solid";

export default function WebService({ setSeeMoreWeb, seeMoreWeb }) {
  const handleOnClick = () => {
    setSeeMoreWeb(!seeMoreWeb);
  };
  return (
    <div className="grid mb-8 grid-cols-2 gap-x-5 gap-y-10">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div className="col-span-2 flex justify-center" align="center">
        <Fade triggerOnce>
          <p className="text-base font-semibold" color="purple.300">
            WEBSERVICE
          </p>
          <button onClick={handleOnClick}>
            <ArrowUpIcon className="h-5 w-5 text-cyan-500" />
          </button>
        </Fade>
      </div>

      {/* ------------------------------------- PRIMER PARRAFO --------------------------------------------- */}
      <div align="right" className="mt-auto mb-auto">
        <Slide duration={1500} triggerOnce>
          <div className="p-8">
            <p className="w-3/4">
              This was my last project at Henry Bootcamp, I worked with 7
              teammates both in the FRONT-END and BACK-END to create this app.
              WebService is a service e-commerce where you can offer or buy a
              service.
            </p>
          </div>
        </Slide>
      </div>

      <div colSpan={2} align="left">
        <Slide triggerOnce>
          <img
            className="w-3/4 "
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
      </div>

      {/* ------------------------------------- SEGUNDO PARRAFO --------------------------------------------- */}
      <div colSpan={2} align="right">
        <Slide duration={1500} triggerOnce>
          <img
            className="w-3/4 "
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
      </div>

      {/* <GridItem colSpan={1} align="right">
        <Image
          w="300px"
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785251/webservice_3_vd7kaj.png"
          alt="landing"
        />
      </GridItem> */}

      <div align="left" className="mt-auto mb-auto">
        <Slide triggerOnce>
          <div className="p-8">
            <p className="w-3/4">
              The technologies we used for this project were React, Redux,
              Material UI among other libraries for the FRONT-END. Node.js,
              Express, Sequelize and PSQL for the BACK-END. Other tools we used
              were Git, Github, Heroku and Vercel. We also worked with SCRUM
              methodology.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div align="right" className="mt-auto mb-auto">
        <Slide duration={1500} triggerOnce>
          <div className="p-8">
            <p className="w-3/4">
              In the app you can post a service, add a service to favourites,
              buy a service and then rate it among other functions. As the Admin
              user you can view all kind of statistics related to users and to
              the services offered.
            </p>
          </div>
        </Slide>
      </div>

      {/* <GridItem colSpan={1} align="cenleftter">
        <Image
          w="300px"
          h="250px"
          objectFit="contain"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785253/webservice_4_bm6mog.png"
          alt="landing"
        />
      </GridItem> */}

      <div colSpan={2} align="cenleftter">
        <Slide triggerOnce>
          <img
            className="w-3/4 "
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
      </div>
    </div>
  );
}
