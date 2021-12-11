import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { ArrowUpIcon } from "@heroicons/react/solid";

export default function Dogs({ setSeeMoreDogs, seeMoreDogs }) {
  const handleOnClick = () => {
    setSeeMoreDogs(!seeMoreDogs);
  };

  return (
    <div className="grid mb-8 grid-cols-2 gap-x-5 gap-y-10">
      {/* ------------------------------------- TITULO --------------------------------------------- */}
      <div className="col-span-2 flex justify-center" align="center">
        <Fade triggerOnce>
          <p className="text-base font-semibold" color="purple.300">
            THE DOG APP
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
            <img
              className="w-3/4 "
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

      {/* ------------------------------------- SEGUNDO PARRAFO --------------------------------------------- */}
      <div colSpan={1} align="right">
        <Slide duration={1500} triggerOnce>
          <div>
            <img
              className="w-3/4 "
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

      <div className="mt-auto mb-auto" align="left">
        <Slide triggerOnce>
          <div className="p-8">
            <p className="w-3/4">
              The technologies I used for this project were React, Redux and
              pure CSS for the FRONT-END. Node.js, Express, Sequelize and PSQL
              for the BACK-END. Other tools I used were Git, Github, Heroku and
              Vercel.
            </p>
          </div>
        </Slide>
      </div>

      {/* ------------------------------------- TERCER PARRAFO --------------------------------------------- */}
      <div className="mt-auto mb-auto" align="right">
        <Slide duration={1500} triggerOnce>
          <div className="p-8">
            <p className="w-3/4">
              You can create a breed selecting some characteristics and a photo.
              The new breed created is stored in the database. You can then
              filter by API breeds or your own breeds.
            </p>
          </div>
        </Slide>
      </div>

      <div>
        <Slide triggerOnce>
          <img
            className="w-3/4 "
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
