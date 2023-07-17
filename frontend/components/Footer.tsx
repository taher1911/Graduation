"use client";

import Image from "next/image";
import Link from "next/link";

export const socials = [
  {
    name: "twitter",
    url: "/twitter.svg",
    href: "",
  },
  {
    name: "linkedin",
    url: "/linkedin.svg",
    href: "",
  },
  {
    name: "instagram",
    url: "/instagram.svg",
    href: "",
  },
  {
    name: "facebook",
    url: "/facebook.svg",
    href: "",
  },
];
const Footer = () => (
  <footer className={`w-full py-14 relative mt-16 `}>
    <div className="footer-gradient w-[223px] md:w-[400px] h-[112px] md:h-[70px]" />
    <div className={` mx-auto flex flex-col gap-8 w-[90%] max-w-[1300px]`}>
      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row items-center justify-between flex-wrap gap-4 text-center md:text-left">
          <Link
            href={"/"}
            className="font-extrabold text-xl md:text-[24px] text-white tracking-wider uppercase"
          >
            Detectiva
          </Link>
          <p className="font-normal text-[14px] text-white opacity-80">
            Copyright © 2019 - 2024 Detectiva. All rights reserved.
          </p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link key={social.name} href={social.href}>
                <Image
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                  width={24}
                  height={24}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
