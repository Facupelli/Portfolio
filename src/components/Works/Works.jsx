import React, { useState } from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";
import CuyoBrewers from "./CuyoBrewers/CuyoBrewers";
import Matters from "../Quotes/Matters";
import { Fade } from "react-awesome-reveal";
import { ArrowDownIcon, ArrowCircleDownIcon } from "@heroicons/react/solid";
import s from "./Works.module.css";
import cuyoNew from "../../Media/cuyoNew.png";
import home from "../../Media/cuyobrewers/home.png";

// import { ArrowDownIcon } from "@primer/octicons-react";

export default function Works() {
  const [seeMoreDogs, setSeeMoreDogs] = useState(false);
  const [seeMoreWeb, setSeeMoreWeb] = useState(false);
  const [seeMoreCuyo, setSeeMoreCuyo] = useState(false);

  const dogImage =
    "https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png";

  const webImage =
    "https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785254/webservice_1_hs8uig.png";

  const handleOnClickDog = () => {
    setSeeMoreDogs(!seeMoreDogs);
  };

  const handleOnClickWeb = () => {
    setSeeMoreWeb(!seeMoreWeb);
  };

  const handleOnClickCuyo = () => {
    setSeeMoreCuyo(!seeMoreCuyo);
  };

  return (
    <div className="bg-gray-800">
      <div className="flex items-center gap-x-2 pl-10 py-8 md:pl-28 md:py-16">
        <h1 className="font-semibold text-4xl text-white">Works</h1>
        <ArrowCircleDownIcon className="w-8 text-white" />
      </div>

      {/* ----------------------------------- DOGS CARD ------------------------------------------ */}
      <Fade triggerOnce>
        <div className="flex justify-center">
          {!seeMoreDogs && (
            <div className={s.image}>
              <img className={s.image__img} src={dogImage} alt="dogs" />
              <div className={s.image__overlay}>
                <button onClick={handleOnClickDog}>
                  <div className={s.image__title}>
                    <div>SEE MORE</div>
                    <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </Fade>

      {/* ----------------------------------- DESPLIEGUE DOGS ------------------------------------------ */}
      <div>
        {seeMoreDogs && (
          <Dogs setSeeMoreDogs={setSeeMoreDogs} seeMoreDogs={seeMoreDogs} />
        )}
      </div>

      {/* ----------------------------------- WEBSERVICE CARD ------------------------------------------ */}

      <Fade triggerOnce>
        <div className="pt-20 flex justify-center">
          {!seeMoreWeb && (
            <div className={s.image}>
              <img className={s.image__img} src={webImage} alt="webservice" />
              <div className={s.image__overlay}>
                <button onClick={handleOnClickWeb}>
                  <div className={s.image__title}>
                    <div>SEE MORE</div>
                    <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </Fade>

      {/* ----------------------------------- DESPLIEGUE WEBSERVICE ------------------------------------------ */}
      <div className="pt-20">
        {seeMoreWeb && (
          <WebService setSeeMoreWeb={setSeeMoreWeb} seeMoreWeb={seeMoreWeb} />
        )}
      </div>

      {/* ----------------------------------- CUYOBREWERS CARD ------------------------------------------ */}

      <Fade triggerOnce>
        <div className=" flex justify-center">
          {!seeMoreCuyo && (
            <div className={s.image}>
              <img className={s.image__img} src={home} alt="webservice" />
              <div className={s.image__overlay}>
                <button onClick={handleOnClickCuyo}>
                  {/* <a
                  href="https://github.com/Facupelli/Cuyo-Brewers-Friends"
                  target="_blank"
                  rel="noreferrer"
                > */}
                  <div className={s.image__title}>
                    <div>SEE MORE</div>
                    <ArrowDownIcon className="h-6 w-6 text-cyan-400" />
                  </div>
                  {/* </a> */}
                </button>
              </div>
            </div>
          )}
        </div>
      </Fade>

      {/* ----------------------------------- DESPLIEGUE CUYOBREWRES ------------------------------------------ */}

      <div className="pt-20">
        {seeMoreCuyo && (
          <CuyoBrewers
            setSeeMoreCuyo={setSeeMoreCuyo}
            seeMoreCuyo={seeMoreCuyo}
          />
        )}
      </div>

      {/* --------------------------             MATTERS QUOTE ------------------------------------------ */}
      <Fade triggerOnce>
        <Matters />
      </Fade>

      <div>
        {/* <Dogs /> */}
        {/* <Love /> */}
        {/* <WebService /> */}
        {/* <Matters /> */}
      </div>
    </div>
  );
}
