import React from "react";

export default function Footer() {
  return (
    <div justify="center" pt="5%" pb="2%" bg="gray.900">
      <div>
        <link
          href="https://www.linkedin.com/in/facundo-pellicer-full-stack-developer/"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <button color="cyan.200" variant="ghost">
            Linkedin
          </button>
        </link>
      </div>
      <div>
        <link
          href="https://github.com/Facupelli"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <button color="cyan.200" variant="ghost">
            Github
          </button>
        </link>
      </div>
      <div>
        <link
          href="https://www.instagram.com/facu_pellicer/"
          isExternal
          _hover={{ textDecoration: "none" }}
        >
          <button color="cyan.200" variant="ghost">
            Instagram
          </button>
        </link>
      </div>
    </div>
  );
}
