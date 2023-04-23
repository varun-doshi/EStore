import React from "react";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2023 EStore All rights reserved</p>
      <p className="icons">
        <div>
          <Link href="https://www.linkedin.com/in/varunxdoshi/">
            <a target="_blank">
              <AiFillLinkedin />
            </a>
          </Link>
        </div>
        <div>
          <Link href="https://twitter.com/Varunx10">
            <a target="_blank">
              <AiOutlineTwitter />
            </a>
          </Link>
        </div>
      </p>
    </div>
  );
};

export default Footer;
