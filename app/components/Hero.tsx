import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import { HeroSocialLinks } from "@/constants";
import Link from "next/link";

const myFont = localFont({
  src: [
    {
      path: "../../public/fonts/Minal.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-myfont", // Optional: define a CSS variable
});
const Hero = () => {
  return (
    <>
      <div className="hero-wrapper relative ">
        <div>
          <Image
            src="/images/hero-bg.jpg"
            alt="heo"
            width={0}
            height={0}
            sizes="100%"
            style={{ width: "100%", height: "auto" }} // optional
          />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full text-center">
          <div className={myFont.className}>
            <h1
              className="text-xl uppercase"
              style={{ fontFamily: "var(--font-myfont)" }}
            >
              Te Whanui o nga Whakatupuranga Katoa
            </h1>
          </div>
          <p className="text-lg uppercase -tracking-tighter font-light">
            To Nurture All The Generations To Come
          </p>
          <div>
            <ul className="flex justify-center space-x-4 mt-5">
              {HeroSocialLinks.map((link, index) => (
                <li key={index} className="">
                  <Link
                    href={link.url}
                    target="_blank"
                    className={`text-lg ${link.icon}`}
                  ></Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
