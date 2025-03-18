import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

interface CardDetailProps {
  title: string;
  description: string;
  image?: string | any;
  buttonText: string;
  imageHide: boolean;
}
const CardDetail = ({
  title,
  description,
  image,
  buttonText,
  imageHide,
}: CardDetailProps) => {
  return (
    <>
      <div className="bg-card">
        <div className="px-10 py-10">
          <div className="flex justify-between items-center">
            <h2 className="text-md font-bold text-accent">{title}</h2>
          </div>
          {!imageHide && image && (
            <Image
              src={image}
              alt={title}
              width={300}
              height={300}
              objectFit="cover"
            />
          )}
          <p className="text-accent mt-2">{description}</p>
          <Button className="mt-4">{buttonText}</Button>
        </div>
      </div>
    </>
  );
};

export default CardDetail;
