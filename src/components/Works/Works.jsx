import React from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";
import Love from "../Quotes/Love";
import Matters from "../Quotes/Matters";



export default function Works() {
  return (
    <div>
      <div className='ml-28 my-14'>
        <div>
          <h1 className='font-semibold text-3xl'>
            Works
          </h1>
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
