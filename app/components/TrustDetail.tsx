import Image from "next/image";
import React from "react";
import CategorySlider from "./CategorySlider";
import { Button } from "@/components/ui/button";

const TrustDetail = () => {
  return (
    <>
      <div className="bg-white p-5 mt-[-80px] rounded-tl-xl rounded-tr-xl relative h-full">
        <div className="container mx-auto">
          <div className="bg-muted p-5 rounded-lg mt-24">
            <div className="grid grid-cols-2">
              <div className="text-primary text-md">
                Uncover the roots of our whakapapa, and Join us in our mission
                to uncover the rich heritage of our culture and its profound
                whakapapa
              </div>
              <p className="text-accent text-sm">
                Together, let's delve into the depths of history and embrace the
                vibrant tapestry of the people who contributed in the protection
                of the Maori intellectual rights, and the knowledge that
                resonates with Te Tiriti O Waitangi and He Whakaputanga. Through
                shared knowledge and understanding, we can honor and preserve
                this invaluable legacy for generations to come. Embrace the
                opportunity to learn, connect, and celebrate the enduring spirit
                of those who traversed a journey that led to the protection of
                our intellectual rights.
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-28">
            <Image
              src="/images/history.jpg"
              alt="History"
              height={0}
              width={0}
              sizes="100%"
              style={{ height: "100%", width: "100%" }}
            />
          </div>

          <div className="mt-24 mb-14">
            <h2 className="text-primary font-bold text-title">Ngā Kāwai Ako</h2>
            <p className="text-md text-accent font-normal">
              Learning Categories By Order
            </p>
          </div>
          <CategorySlider />
          <div className="text-center mt-10">
            <Button variant="outline">View Information Glossary</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrustDetail;
