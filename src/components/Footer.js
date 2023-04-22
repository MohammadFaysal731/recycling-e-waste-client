import React from "react";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterCircle
} from "react-icons/ai";
import { BiLocationPlus, BiPhone, BiVoicemail } from "react-icons/bi";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="footer-title">Company</span>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/team">Team</Link>
          <Link to="/pricing">Pricing</Link>
        </div>
        <div>
          <span className="footer-title">Working Hours</span>
          <p>Mon - Fri: 9:00AM - 6:00PM</p>
          <p>Sat - Sun: 8:00AM - 4:00PM</p>
        </div>
        <div>
          <span className="footer-title">Get In Touch</span>
          <p className=" flex">
            <BiLocationPlus className="text-xl" />
            &nbsp; Dhaka Bangladesh
          </p>
          <p className=" flex">
            <BiVoicemail className="text-xl" />
            &nbsp; mohammadfaysal731@gmail.com
          </p>
          <p className=" flex">
            <BiPhone className="text-xl" />
            &nbsp; +88017 - 53 73 09 86
          </p>
          <p className="flex cursor-pointer">
            <a
              href="https://www.facebook.com/groups/2475322306017674/user/100045990253742"
              target="_black"
            >
              <AiFillFacebook className="text-3xl" />
            </a>
            &nbsp;
            <a
              href="https://www.linkedin.com/in/mohammad-faysal/"
              target="_black"
            >
              <AiFillLinkedin className="text-3xl" />
            </a>
            &nbsp;
            <a href="https://twitter.com/Mohamma23119568" target="_black">
              <AiFillTwitterCircle className="text-3xl" />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
