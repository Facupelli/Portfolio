import React from "react";

export default function AboutMe() {
  return (
    <div className="pt-12 pb-8">
      <div className="ml-28">
        <p className="font-semibold text-3xl">About Me</p>
      </div>

      <div className="grid content-center grid-cols-2 mb-8 gap-10 p-8">

        <div align="center" className="mb-auto mt-auto">
          <p className="w-3/4" align="left">
            Hello, my name is Facundo and I enjoy creating things since I was a
            child. I used to create motion graphics for enterpise videos. Then,
            while I was studying Industrial Design at Universidad Nacional de
            San Juan I worked designing AutoCad plans for a metallurgical
            workshop. I always loved technology and making things with the
            internet so I decided to start learning web development at Henry
            Bootcamp. I am now graduated and looking for my first opportunity to
            contribute on challenging projects with everything I have learned
            and still learning everyday.
          </p>
        </div>

        <div align="center">
          <img
            className="w-1/3 h-fit"
            borderRadius="5px"
            border="3px solid #1A202C"
            boxShadow="7px -7px 0 -3px #2D3748, 7px -7px #9DECF9,
            14px -14px 0 -3px #2D3748, 14px -14px #ED64A6"
            objectFit="cover"
            src="https://res.cloudinary.com/dzjz8pe0y/image/upload/v1637793310/foto1-min_opt_obfq5t.png"
            alt="landing"
          />
        </div>
      </div>
    </div>
  );
}
