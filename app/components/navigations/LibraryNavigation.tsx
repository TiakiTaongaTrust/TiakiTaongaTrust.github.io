import React from "react";
import InputFormField from "@/app/components/UI/InputFormField";
import { LibraryLinks } from "@/constants";
import Link from "next/link";

interface LibraryNavigationProps {
  title: string;
}
const LibraryNavigation = ({ title }: LibraryNavigationProps) => {
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
      <div className="flex gap-2 text-center items-stretch">
        {LibraryLinks.map((item, index) => (
          <div
            key={index}
            className="border border-black cursor-pointer p-5 w-full flex items-center justify-center  bg-transparent hover:bg-card-hover transition-all "
          >
            <Link href={item.link} className="text-sm font-bold text-accent">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LibraryNavigation;
