import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // const linksElements = links.map((link) => {
  //   return <a key={link} href={link}>{link}</a>
  // })

  return (
        <nav>{/* display an <a> tag for each link here */}
          {/* {linksElements} */}
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#projects">projects</a>
        </nav>
  );
}

export default NavBar;

// because each link is already within the function, we can hard code a tags and add link name to href.