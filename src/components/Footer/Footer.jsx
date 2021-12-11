import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center gap-12 py-12 bg-gray-900">
      <div>
        <button className="text-lg text-cyan-200 font-bold font-body">
          Linkedin
        </button>
      </div>
      <div>
        <button className="text-lg text-cyan-200 font-bold font-body">
          Github
        </button>
      </div>
      <div>
        <button className="text-lg text-cyan-200 font-bold font-bod">
          Instagram
        </button>
      </div>
    </div>
  );
}
