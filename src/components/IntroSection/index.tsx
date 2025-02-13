import Image from "next/image";
import React from "react";

const IntroSection = () => {
  return (
    <div className="introsection-container">
      <div className="introsection"></div>

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

      <Image
        src="/user.png"
        alt="user"
        // layout="fill"
        width={600}
        height={600}
        objectFit="cover"
        className="introsection-user"
      />
      <div className="introsection-content">
        <div className="line-1">Hi, I am</div>
        <div className="line-2">Meet Majevadiya</div>
        <div className="line-3">React js Developer</div>
      </div>
    </div>
  );
};

export default IntroSection;
