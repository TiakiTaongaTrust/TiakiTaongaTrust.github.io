import React from "react";
import InputFormField from "./UI/InputFormField";
import { Button } from "@/components/ui/button";

const GetInTouch = () => {
  return (
    <>
      <div className="bg-primary-shade-400 p-11 py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div>
              <h2 className="font-bold text-title text-white">
                Get in Touch With Us Today
              </h2>
              <p className="text-card font-light text-md mt-4">
                We are open for any suggestion or just to have a chat. Leave a
                message and we will return as soon as possible!
              </p>
            </div>

            <div className="flex flex-col space-y-5 ml-28">
              <InputFormField
                label="Full Name*"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
              <InputFormField
                label="Email*"
                type="email"
                id="email"
                placeholder="Enter your email"
              />
              <InputFormField
                label="Message*"
                type="textarea"
                id="message"
                height="min-h-[150px]"
                placeholder="Enter your message"
              />
              <div>
                <Button className="text-white w-fit mt-12">
                  Submit Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
