"use client";
import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  name: string;
  link: string;
  hasMegaMenu?: boolean;
}
interface MegaMenuPortalProps {
  children: React.ReactNode;
  className?: string;
}

const MegaMenuPortal: React.FC<MegaMenuPortalProps> = ({
  children,
  className,
}) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div className={className}>{children}</div>,
    document.body
  );
};

const Nav: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollToStart = useCallback(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  // Determine if we're at the last slide.
  const isLastSlide =
    emblaApi && emblaApi.scrollSnapList().length - 1 === selectedIndex;

  return (
    <nav className="relative bg-primary p-4 text-white">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Link href="/">
            <Image src="/images/logo.svg" alt="" height={120} width={120} />
          </Link>
        </div>
        <div className="col-span-10">
          <div className="flex justify-between items-center">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {NAV_ITEMS.map((item, index) => (
                  <div
                    key={index}
                    className="relative flex-none w-1/3 text-center px-4 py-2 hover:text-secondary cursor-pointer"
                    onMouseEnter={() =>
                      setHoveredItem(item.hasMegaMenu ? index : null)
                    }
                    onMouseLeave={() => setHoveredItem(null)}
                    aria-haspopup={item.hasMegaMenu ? "true" : undefined}
                    aria-expanded={hoveredItem === index}
                  >
                    <a href={item.link}>{item.name}</a>
                    {item.hasMegaMenu && hoveredItem === index && (
                      <MegaMenuPortal className="absolute top-[80px] h-[500px] left-0 mt-2 w-full bg-secondary shadow-lg rounded-md p-4 z-10">
                        <ul>
                          <li className="p-2 text-white hover:bg-gray-100">
                            <a href="#">Wai 262 Flora and Fauna Claim</a>
                          </li>
                        </ul>
                      </MegaMenuPortal>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Button onClick={isLastSlide ? scrollToStart : scrollNext}>
              {isLastSlide ? "❮" : "❯"}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
