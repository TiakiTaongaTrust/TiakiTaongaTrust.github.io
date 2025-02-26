import { Button } from "@/components/ui/button";
import {
  FeaturedTopicsCategories,
  SupportedTopicsCategories,
} from "@/constants";
import React from "react";

const FeaturedTopics = () => {
  return (
    <>
      <div className="featured-topics-wrapper bg-secondary pt-16 p-5 mt-24">
        <div className="container mx-auto">
          <div className="text-left">
            <div className="text-white font-bold text-title">
              Featured Topics
            </div>
            <p className="text-white text-sm">Select a Topic to Learn More</p>
          </div>
          <div className="grid grid-cols-3 gap-sm mt-10">
            {FeaturedTopicsCategories.map((data, index) => (
              <div key={index} className="flex flex-col">
                <div className="">
                  <img
                    src={data.img}
                    alt={data.title}
                    width={0}
                    height={0}
                    sizes="100%"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>
                <div className="">
                  <h2 className="text-md text-white font-bold">{data.title}</h2>
                  <p className="text-sm text-white mt-6">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white w-full h-[1px] my-10" />
          <p className="text-sm text-white ">
            Anyone is open to supporting our cause as an organisation once they
            know our identity and purpose. We also provide the means of access
            to information that you may be interested in gaining knowledge of
            across different fields of studies and research notes.
          </p>
          <div className="grid grid-cols-3 gap-sm mt-16">
            {SupportedTopicsCategories.map((data, index) => (
              <div
                key={index}
                className="bg-card p-5 pt-10 rounded-lg text-center"
              >
                <div className="flex flex-col justify-between items-center gap-10">
                  <div className={`text-icon-xl ${data.icon}`} />
                  <p className="text-sm text-secondary min-h-[80px]">
                    {data.description}
                  </p>

                  <Button
                    variant="outline"
                    className="w-full bg-transparent font-bold border-secondary border-2"
                  >
                    {data.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedTopics;
