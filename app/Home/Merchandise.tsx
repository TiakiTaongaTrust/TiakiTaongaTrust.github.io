import { Button } from "@/components/ui/button";
import { MerchandisePost1 } from "@/constants";
import Image from "next/image";
import React from "react";
interface MerchandiseProps {
  merchandise: {
    image: string;
    title: string;
    description1: string;
    description2: string;
    buttonText: string;
  }[];
  reverse?: boolean;
}

const Merchandise: React.FC<MerchandiseProps> = ({
  merchandise,
  reverse = false,
}) => {
  return (
    <div className={`py-20 ${reverse ? "" : "merchandise-wrapper"}`}>
      <div className="container mx-auto">
        {merchandise.map((data, index) => (
          <div key={index} className="p-5 grid grid-cols-12 ">
            <div
              className={` ${
                reverse ? "order-2" : ""
              } flex flex-col col-span-4`}
            >
              <h2 className="text-primary text-title font-bold mb-7">
                {data.title}
              </h2>
              <p className="text-sm">{data.description1}</p>
              <p className="text-sm my-6">{data.description2}</p>
              <Button className="w-fit px-10">{data.buttonText}</Button>
            </div>
            <div className="col-span-8">
              <Image
                src={data.image}
                alt="merchandise"
                sizes="100%"
                height={0}
                width={0}
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchandise;
