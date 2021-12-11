import React from "react";
import s from "./AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="ml-28 pb-16 ">
        <p className="font-semibold text-3xl text-white ">About Me</p>
      </div>

      <div className="flex justify-center items-center	 gap-16 px-40">
        <p className="w-1/3 text-white">
          Hello, my name is Facundo and I enjoy creating things since I was a
          child. I used to create motion graphics for enterpise videos. Then,
          while I was studying Industrial Design at Universidad Nacional de San
          Juan I worked designing AutoCad plans for a metallurgical workshop. I
          always loved technology and making things with the internet so I
          decided to start learning web development at Henry Bootcamp. I am now
          graduated and looking for my first opportunity to contribute on
          challenging projects with everything I have learned and still learning
          everyday.
        </p>

        <img
          className={s.img}
          border="3px solid #1A202C"
          objectFit="cover"
          src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637793310/foto1-min_opt_obfq5t.png"
          alt="landing"
        />
      </div>
    </div>
  );
}
