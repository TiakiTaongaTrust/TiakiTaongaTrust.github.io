import Image from "next/image";

import Hero from "./components/Hero";
import TrustDetail from "./components/TrustDetail";
import FeaturedTopics from "./components/FeaturedTopics";
import Merchandise from "./components/Merchandise";
import { MerchandisePost1, MerchandisePost2 } from "@/constants";
import GetInTouch from "./components/GetInTouch";
import SubscribeNewsletter from "./components/SubscribeNewsletter";

export default function Home() {
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
}
