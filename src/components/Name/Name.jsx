import React from "react";


export default function Name() {
  return (
    <div pl="10%" pt="5%">
      <div>
        <h6 as="h6" size="xs" color="black">
          Hi, my name is
        </h6>
        <h2 as="h2" size="2xl" color="black" isTruncated>
          Facundo Pellicer.
        </h2>
        <h2 as="h2"  color="black" isTruncated>
          Full Stack Developer
        </h2>
      </div>

      <div mt="2%" w="35%">
        <p fontSize="md" color="black">
          I'm a developer with great team work ability. I love code and I'm always trying to
          learn from everything I see and from other people. I love being
          autodidact and I'm very curious. I also love mountains (I live near Cordillera de los Andes) and making
          homemade beer 🍻
        </p>
      </div>
    </div>
  );
}
