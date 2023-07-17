import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { UrlObject } from "url";
type Props = {
  isOpen: boolean;
  LINKS: any;
  pathname: string;
  auth: any;
  logoutHandler: any;
};

const MobileNav = ({ isOpen, LINKS, pathname, auth, logoutHandler }: Props) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen ? (
        <motion.nav
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          className="min-w-[90vw] min-h-[70vh] sm:min-w-[90vw]  bg-[#ccc]/75 rounded-lg backdrop-blur-md py-32 flex flex-col justify-between items-center fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden"
        >
          <ul className="flex flex-col gap-5 flex-1 items-center justify-center md:space-x-8 text-xl">
            {LINKS.map(
              (link: {
                href: string | UrlObject;
                id: React.Key | null | undefined;
                title:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined;
              }) => (
                <Link
                  href={link.href}
                  key={link.id}
                  className={`${
                    pathname == link.href && "active"
                  } headerLink  tracking-wider mx-2 `}
                  // style={{ color: pathname == "/about" ? "#000" : "#fff" }}
                >
                  {link.title}
                </Link>
              )
            )}
          </ul>

          <div className="flex items-center justify-center mt-16">
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
        </motion.nav>
      ) : null}
    </AnimatePresence>
  );
};

export default MobileNav;
