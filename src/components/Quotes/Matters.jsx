import React from "react";
import s from "./Matters.module.css";

export default function Matters() {
  return (
    <div justify="center" align="center">
      <div className={s.box} mt="10%" mb="10%" p={5}>
        <h4 as="h4" size="lg" color="gray.300">
          What matters is how much love you put into what you do
        </h4>
      </div>
    </div>
  );
}
