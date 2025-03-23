import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <Nav />
      </div>
    </>
  );
};

export default Header;
