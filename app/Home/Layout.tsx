import React from "react";

import Hero from "./Hero";
import TrustDetail from "./TrustDetail";
import FeaturedTopics from "./FeaturedTopics";
import Merchandise from "./Merchandise";
import { MerchandisePost1, MerchandisePost2 } from "@/constants";
import GetInTouch from "./GetInTouch";
import SubscribeNewsletter from "./SubscribeNewsletter";
const HomeLayout = () => {
  return (
    <>
      <Hero />
      <TrustDetail />
      <FeaturedTopics />
      <Merchandise merchandise={MerchandisePost1} />
      <Merchandise merchandise={MerchandisePost2} reverse />
      <GetInTouch />
      <SubscribeNewsletter />
    </>
  );
};

export default HomeLayout;
