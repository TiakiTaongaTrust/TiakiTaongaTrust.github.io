import { FooterLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary">
        <div className="container p-5 mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              <Link href="/">
                <Image src="/images/logo.svg" alt="" height={250} width={250} />
              </Link>
            </div>
            <div className="col-span-9">
              <div className="grid grid-cols-3 gap-4">
                {[0, 1, 2].map((col) => (
                  <div key={col} className="flex flex-col space-y-2">
                    {FooterLinks.slice(col * 5, (col + 1) * 5).map(
                      (data, index) => (
                        <Link
                          href={data.link}
                          key={index}
                          className="text-white hover:text-primary-darker block max-w-[80%] text-xxs"
                        >
                          {data.title}
                        </Link>
                      )
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <h5>Follow Us</h5>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
