import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles.js";
import { navLinks } from "../../Constants/constants";
import { mainIcon, menu, close } from "../../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Constants/constants";
import { color } from "framer-motion";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
      ${styles.paddingX} w-full flex items-center py-5
      fixed top-0 z-20 bg-primary
    `}
    >
      <div className="w-full flex justify-between items-center max-w-7x1 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={mainIcon}
            alt={mainIcon}
            className="w-18 h-9 object-contain"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex"></p>
        </Link>
        <div className="flex gap-4">
          <a
            href="https://github.com/ratnabhindi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
              icon={icons.faGithub}
              style={{ color: "rgb(179, 40, 108)" }}
            />
          </a>
          <a
            href="mailto:ratna.bhindi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
              icon={icons.faEnvelope}
              style={{ color: "rgb(179, 40, 108)" }}
            />
          </a>
        </div>
        {/* <a href="https://github.com/ratnabhindi" target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
            icon={icons.faGithub}
          />
        </a>
        <a href="mailto:ratna.bhindi@gmail.com" target="_blank">
          <FontAwesomeIcon
            className="text-3xl text-grayscale-25 hover:text-primary-200 hover:scale-[1.1] transition-all duration-75"
            icon={icons.faEnvelope}
          />
        </a> */}
        <ul
          className="list-none hidden sm:flex flex-row gap-10"
          style={{ color: "#b3286c" }}
        >
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[24px] font-bold cursor-pointer `}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            className="w-[28ox] h-[28px] pbject-contain cursor-pointer z-20 "
            onClick={() => setToggle(!toggle)}
            src={toggle ? close : menu}
            alt={menu}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } pt-20 p-6 black-gradient absolute top-2 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px]`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
