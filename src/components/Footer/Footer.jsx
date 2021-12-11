import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center gap-24 py-12 bg-gray-900">
      <div>
        <a
          className="text-lg text-cyan-200 font-bold font-body transition duration-200 hover:text-pink-500"
          href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/"
        >
          Linkedin
        </a>
      </div>
      <div>
        <a
          className="text-lg text-cyan-200 font-bold font-body transition duration-200 hover:text-pink-500"
          href="https://github.com/Facupelli"
        >
          Github
        </a>
      </div>
      <div>
        <a
          className="text-lg text-cyan-200 font-bold font-bod transition duration-200 hover:text-pink-500"
          href="https://www.instagram.com/facu_pellicer/"
        >
          Instagram
        </a>
      </div>
    </div>
  );
}
