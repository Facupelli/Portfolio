import React from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";
import Love from "../Quotes/Love";
import Matters from "../Quotes/Matters";

export default function Works() {
  return (
    <div>
      <div className="ml-28 my-14 hover:bg-cyan-600">
        <h1 className="font-semibold text-3xl hover:bg-cyan-600">Works</h1>
      </div>

      <div className="flex justify-center ">
        <img
          className="w-1/2 h-fit rounded-md hover:border-4 hover:border-indigo-300"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637709264/landing_pidogs_vqevm5.png"
          alt="landing"
        />
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
