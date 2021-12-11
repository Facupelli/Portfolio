import React from "react";


export default function Name() {
  return (
    <div className='pl-28 pt-14'>
      <div>
        <h6 as="h6" size="xs" color="black">
          Hi, my name is
        </h6>
        <h2 className='font-bold'>
          Facundo Pellicer.
        </h2>
        <h2 className='font-semibold'>
          Full Stack Developer
        </h2>
      </div>

      <div  className='w-35% mt-2'>
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
