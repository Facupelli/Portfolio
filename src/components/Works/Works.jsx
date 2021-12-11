import React, { useState } from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";
import Love from "../Quotes/Love";
import Matters from "../Quotes/Matters";
import { ArrowDownIcon } from "@heroicons/react/solid";

export default function Works() {
  const [seeMoreDogs, setSeeMoreDogs] = useState(false);
  const [seeMoreWeb, setSeeMoreWeb] = useState(false);

  // const [showTextDog, setShowTextDog] = useState(false);

  // const handleMouseEnter = () => {
  //   setShowTextDog(true);
  // };
  // const handleMouseLeave = () => {
  //   setShowTextDog(false);
  // };

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
        <h1 className="font-semibold text-3xl text-white underline">Works</h1>
      </div>

      <div>
        {!seeMoreDogs && (
          <div className="flex justify-center ">
            <div
              className="group w-1/2 h-96 bg-no-repeat bg-contain rounded-md"
              style={{ backgroundImage: `url('${dogImage}')` }}
            >
              <div className="absolute">
                <button onClick={handleOnClickDog}>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-2xl font-body">SEE MORE</p>
                    <ArrowDownIcon className="h-5 w-5 text-cyan-500" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div>
        {seeMoreDogs && (
          <Dogs setSeeMoreDogs={setSeeMoreDogs} seeMoreDogs={seeMoreDogs} />
        )}
      </div>

      <div className="mt-20">
        {!seeMoreWeb && (
          <div className="flex justify-center ">
            <div
              className="group w-1/2 h-96 bg-no-repeat bg-contain rounded-md"
              style={{ backgroundImage: `url('${webImage}')` }}
            >
              <div className="absolute">
                <button onClick={handleOnClickWeb}>
                  <div className="flex gap-2 items-center">
                    <p className="font-bold text-2xl font-body">SEE MORE</p>
                    <ArrowDownIcon className="h-5 w-5 text-cyan-500" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="mt-20">
        {seeMoreWeb && (
          <WebService setSeeMoreWeb={setSeeMoreWeb} seeMoreWeb={seeMoreWeb} />
        )}
      </div>

      <div>
        {/* <Dogs /> */}
        {/* <Love /> */}
        {/* <WebService /> */}
        {/* <Matters /> */}
      </div>
    </div>
  );
}
