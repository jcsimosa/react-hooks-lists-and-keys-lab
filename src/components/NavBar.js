import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
    const linkList = links.map((obj)=> {
      return <a key={obj} href={`#${obj}`}>{obj}</a>
    })

    return <nav>{linkList}</nav>;
  }
  
  export default NavBar;
