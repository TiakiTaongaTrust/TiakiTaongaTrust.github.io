import React from "react";

export interface SubPageHeroProps {
  herobg?: string;
  title?: string;
}

export const Subpagehero = ({ herobg, title }: SubPageHeroProps) => {
  return (
    <>
      <section className="">
        <div className={`hero-bg ${herobg}`}>
          <div className="flex flex-col absolute sm:top-[35%] top-[25%] left-[50%] translate-x-[-50%] translate-y[-50%] w-full text-left">
            <div className="container">
              <div className="text-hero-title text-white font-bold">
                {title}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
