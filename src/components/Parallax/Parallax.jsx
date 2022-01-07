import React from "react";
import { Parallax } from "react-parallax";
import Name from "../Name/Name";

const image1 =
  "https://images.unsplash.com/photo-1482686115713-0fbcaced6e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1467&q=80";

  const insideStyles = {
  background: "",
};

export default function ParallaxComponent() {
  return (
    <>
      <div className="hidden md:block">
        <Parallax bgImage={image1} strength={-200}>
          <div style={{ height: 500 }}>
            <div style={insideStyles}>
              <Name />
            </div>
          </div>
        </Parallax>
      </div>
      <div className="md:hidden bg-intro bg-bottom-18">
        <div className="h-parallaxLG " >
          <div style={insideStyles}>
            <Name />
          </div>
        </div>
      </div>
    </>
  );
}
