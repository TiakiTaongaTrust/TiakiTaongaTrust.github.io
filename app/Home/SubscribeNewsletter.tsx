import React from "react";
import InputFormField from "../components/UI/InputFormField";
import { Button } from "@/components/ui/button";

const SubscribeNewsletter = () => {
  return (
    <>
      <div className="bg-secondary p-11 py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <p className="text-white text-md max-w-[60%]">
              Be a subscriber today and receive exciting news through our
              Newsletters
            </p>
            <div className="ml-28">
              <InputFormField
                label="Email*"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
              <div>
                <Button className="w-fit mt-6 px-11" variant="outlineInverse">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeNewsletter;
