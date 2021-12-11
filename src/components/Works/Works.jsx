import React from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";
import Love from "../Quotes/Love";
import Matters from "../Quotes/Matters";



export default function Works() {
  return (
    <div className='bg-cyan-200'>
      <div ml="10%" mb="5%">
        <div align="baseline">
          <h1 className='text-red-700'>
            Works
          </h1>
          <button className='bg-cyan-400'>
            BUTTON
          </button>
        </div>
      </div>

      <div>
        <Dogs />
        <Love />
        <WebService />
        <Matters />
        
      </div>

      
    </div>
  );
}
