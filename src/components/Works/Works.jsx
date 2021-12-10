import React from "react";
import Dogs from "./Dogs/Dogs";
import WebService from "./WebService/WebService";
import Love from "../Quotes/Love";
import Matters from "../Quotes/Matters";



export default function Works() {
  return (
    <div pt='3%' bg='gray.800'>
      <div ml="10%" mb="5%">
        <div align="baseline">
          <h4 as="h4" size="lg" color='gray.300'>
            Works
          </h4>
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
