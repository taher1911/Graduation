import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShopping } from "react-icons/ai";

import { navVariants } from "../utils/motion";
import { motion } from "framer-motion";
import MobileNav from "./MobileNav";

// import { signIn, signOut, useSession } from "next-auth/react";

const LINKS = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Pricing",
    href: "/pricing",
  },
  {
    id: 4,
    title: "Contact Us",
    href: "/support",
  },
];

const Navbar = ({}) => {
  const { pathname } = useRouter();
  const router = useRouter();
  const [auth, setAuth] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // navbar show and hidden functionality
  useEffect(() => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-scroll").style.background = "transparent";

        document.getElementById("nav-scroll").style.top = "0px";
      } else {
        document.getElementById("nav-scroll").style.top = "-60px";
      }
      prevScrollpos = currentScrollPos;
      setScroll(currentScrollPos);
    };
  }, []);

  useEffect(() => {
    const userInfo =
      localStorage.getItem("detectivaUser") !== "undefined"
        ? JSON.parse(localStorage.getItem("detectivaUser"))
        : localStorage.clear();

    if (userInfo !== "undefined") {
      setAuth(userInfo);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("detectivaUser");
    router.reload();
  };
  return (
    <>
      <nav
        className="fixed  left-0 top-0 z-50 bg-transparent flex w-full text-white  mx-auto justify-between items-center py-3  transition-all duration-500 px-[3%]  md:px-[5%]  "
        id="nav-scroll"
        style={{
          backdropFilter: scroll <= 200 ? "none" : "blur(5px)",
          color: pathname == "about" ? "#000" : "#fff",
        }}
      >
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex  items-center">
            <Link href="/" className="inline-block mr-14">
              <div className="relative h-9  opacity-100 transition hover:opacity-80 cursor-pointer ">
                {/* <Image
                src="/apple-black-logo.png"
                alt="apple-icon"
                fill
                style={{
                  objectFit: "contain",
                }}
              /> */}
                <span
                  className="text-[1rem] md:text-[1.35rem] font-bold flex items-center -mt-2"
                  // style={{ color: pathname == "/about" ? "#000" : "#fff" }}
                >
                  <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent font-bolder text-4xl">
                    D
                  </span>
                  <span className="tracking-wider pt-1">ETECTIVA</span>
                </span>
              </div>
            </Link>

            <ul className="hidden md:flex flex-1 items-center justify-center md:space-x-8">
              {LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className={`${
                    pathname === link.href && "active"
                  } headerLink  tracking-wider mx-0 `}
                  // style={{ color: pathname == "/about" ? "#000" : "#fff" }}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          {/* mobile nav buttons */}
          <button
            type="button"
            className="flex md:hidden flex-col items-center justify-center cursor-pointer  "
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span
              className={`bg-white duration-300 ease-out h-0.5 w-8 rounded-sm transition-all  ${
                isOpen
                  ? "rotate-45 translate-y-[.3rem] bg-gradient-to-r from-pink-500 to-violet-500"
                  : "-translate-y-0.5"
              }`}
            ></span>
            <span
              className={`bg-white duration-300 ease-out h-0.5 w-8 rounded-sm my-[.20rem] transition-all ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white duration-300 ease-out h-0.5 w-8 rounded-sm translate-y-0.5 transition-all ${
                isOpen
                  ? "-rotate-45 -translate-y-[.20rem] bg-gradient-to-r from-pink-500 to-violet-500"
                  : "translate-y-0.5"
              }`}
            ></span>
          </button>
          <div className="hidden md:flex items-center justify-end ">
            {!auth && (
              <>
                <Link
                  href={"/login"}
                  className="mr-3 tracking-wider font-bold "
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className=" rounded px-7 py-2 overflow-hidden group bg-gradient-to-r from-pink-500 to-violet-500 relative text-white hover:scale-105 transition-all ease-out duration-300"
                >
                  <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-transparent opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative font-bold tracking-wider">
                    Sign Up
                  </span>
                </Link>
              </>
            )}
            {auth && (
              <button
                className=" rounded px-7 py-2 overflow-hidden group bg-gradient-to-r from-pink-500 to-violet-500 relative text-white hover:scale-105 transition-all ease-out duration-300"
                onClick={logoutHandler}
              >
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-transparent opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative font-bold tracking-wider">
                  Logout
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>

      <MobileNav
        isOpen={isOpen}
        LINKS={LINKS}
        pathname={pathname}
        auth={auth}
        logoutHandler={logoutHandler}
      />
    </>
  );
};

export default Navbar;
