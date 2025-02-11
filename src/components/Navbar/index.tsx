import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <Image src="/logo.png" alt="portfolio" width="60" height="50" />
      <ul>
        <li>About Me</li>
        <li>Skills</li>
        <li>Portfolio</li>
        <li>
          <button className="btn btn-primary">contact me</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
