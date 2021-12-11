import React, { useState } from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";
import Love from "../Quotes/Love";
import Matters from "../Quotes/Matters";
import { ArrowDownIcon } from "@heroicons/react/solid";

export default function Works() {
  const [seeMoreDogs, setSeeMoreDogs] = useState(false);
  const [seeMoreWeb, setSeeMoreWeb] = useState(false);

  const handleOnClickDog = () => {
    setSeeMoreDogs(!seeMoreDogs);
  };

  const handleOnClickWeb = () => {
    setSeeMoreWeb(!seeMoreWeb);
  };

  return (
    <div>
      <div className="ml-28 my-14">
        <h1 className="font-semibold text-3xl ">Works</h1>
      </div>

      <div>
        {!seeMoreDogs && (
          <div className="flex justify-center ">
            <img
              className="w-1/2 h-fit rounded-md "
              src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png"
              alt="landing-dog"
            />
            <div>
              <p>see more</p>
              <button onClick={handleOnClickDog}>
                <ArrowDownIcon className="h-5 w-5 text-cyan-500" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
        {seeMoreDogs && (
          <Dogs setSeeMoreDogs={setSeeMoreDogs} seeMoreDogs={seeMoreDogs} />
        )}
      </div>

      <div>
        {!seeMoreWeb && (
          <div className="flex justify-center ">
            <img
              className="w-1/2 h-fit rounded-md "
              src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637785254/webservice_1_hs8uig.png"
              alt="landing-web"
            />
            <div>
              <p>see more</p>
              <button onClick={handleOnClickWeb}>
                <ArrowDownIcon className="h-5 w-5 text-cyan-500" />
              </button>
            </div>
          </div>
        )}
      </div>

      <div>
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
