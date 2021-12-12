import React, { useState } from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";
import Love from "../Quotes/Love";
import Matters from "../Quotes/Matters";
import { Fade } from "react-awesome-reveal";
import { ArrowDownIcon } from "@heroicons/react/solid";
import s from "./Works.module.css";

export default function Works() {
  const [seeMoreDogs, setSeeMoreDogs] = useState(false);
  const [seeMoreWeb, setSeeMoreWeb] = useState(false);

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

  return (
    <div className="bg-gray-800">
      <div className="pl-28 py-16">
        <h1 className="font-semibold text-3xl text-white">Works</h1>
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
