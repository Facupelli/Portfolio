import React from "react";
import { HeartIcon } from "@heroicons/react/solid";
import s from './Matters.module.css'

export default function Matters() {
  return (
    <div className={s.container}>
      <div className={s.quote} >
        <p className="text-white  font-semibold text-2xl font-title">
          What matters is how much love you put into what you do
        </p>
        <HeartIcon className="h-10 w-10 text-cyan-300" />
      </div>
    </div>
  );
}
