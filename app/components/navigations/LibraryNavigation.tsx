"use client";
import React, { useEffect, useState } from "react";
import InputFormField from "@/app/components/UI/InputFormField";
import { LibraryLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LibraryNavigationProps {
  title: string;
}

const LibraryNavigation = ({ title }: LibraryNavigationProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname(); // Using usePathname to get the current path

  useEffect(() => {
    // Set the mounted state to true once the component is mounted
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return nothing while the component is being mounted
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h5 className="text-accent font-bold text-title">{title}</h5>
        <InputFormField
          label="Search"
          type="text"
          id="search"
          color="card"
          placeholder="Search"
        />
      </div>
      <div className="flex gap-2 text-center">
        {LibraryLinks.map((item, index) => {
          const isActive = pathname === item.link; // Compare with pathname from usePathname
          return (
            <div
              key={index}
              className={`border border-black cursor-pointer  w-full flex items-center justify-center  ${
                isActive ? "bg-card-hover" : "bg-transparent"
              } transition-all`}
            >
              <Link
                href={item.link}
                className="text-sm font-bold text-accent h-full p-5 w-full flex justify-center items-center"
              >
                {item.title}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LibraryNavigation;
