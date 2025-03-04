"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { motion } from "framer-motion"; // Import framer-motion for animation

interface NavItem {
  name: string;
  link: string;
  hasMegaMenu?: boolean;
  megaMenuContent?: { name: string; link: string }[];
}

interface MegaMenuPortalProps {
  children: React.ReactNode;
  className?: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const MegaMenuPortal: React.FC<MegaMenuPortalProps> = ({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (typeof document === "undefined") return null;
  return ReactDOM.createPortal(
    <div
      className={className}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>,
    document.body
  );
};

const Nav: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isNavHovered, setIsNavHovered] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility under MegaMenuPortal
  const [menuContent, setMenuContent] = useState<any>(null); // Store content for the sliding menu
  const menuRef = useRef<HTMLDivElement>(null); // Reference to menu container

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

  const isLastSlide = emblaApi?.scrollSnapList()?.length - 1 === selectedIndex;

  const handleNavMouseEnter = () => {
    setIsNavHovered(true);
  };

  const handleNavMouseLeave = () => {
    setIsNavHovered(false);
    setHoveredItem(null); // Close any open mega menu when mouse leaves the entire nav
  };

  const toggleMenu = (item: NavItem) => {
    setIsMenuOpen((prevState) => !prevState); // Toggle the sliding menu on MenuIcon click
    setMenuContent(item.megaMenuContent); // Set content of the menu based on clicked item
  };

  return (
    <nav
      className="relative bg-primary p-4 text-white"
      onMouseEnter={handleNavMouseEnter}
      onMouseLeave={handleNavMouseLeave}
    >
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Link href="/">
            <Image src="/images/logo.svg" alt="Logo" height={120} width={120} />
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
                    onMouseLeave={() => {
                      if (!isNavHovered) {
                        setHoveredItem(null); // Only close if the nav is not being hovered
                      }
                    }}
                    aria-haspopup={item.hasMegaMenu ? "true" : undefined}
                    aria-expanded={hoveredItem === index}
                  >
                    <Link href={item.link}>{item.name}</Link>
                    {item.hasMegaMenu &&
                      hoveredItem === index &&
                      item.megaMenuContent && (
                        <MegaMenuPortal
                          className="absolute top-[90px] left-0 w-full bg-secondary shadow-lg p-4 z-10"
                          onMouseEnter={() => setHoveredItem(index)}
                          onMouseLeave={() => setHoveredItem(null)} // Close on leave of mega menu itself
                        >
                          <div className="grid grid-cols-12">
                            <div className="col-span-3">
                              <h2 className="text-white text-title font-bold max-w-[80%]">
                                {item.innertitle}
                              </h2>
                            </div>
                            <div className="col-span-9 border-l border-white pl-10">
                              <div className="flex flex-col">
                                <h5 className="text-white font-bold text-md">
                                  {item.listTitle}
                                </h5>
                                <ul className="flex flex-wrap mt-5">
                                  {item.megaMenuContent.map(
                                    (menuItem, menuIndex) => (
                                      <li
                                        key={menuIndex}
                                        className="p-2 text-white hover:opacity-55 flex space-x-4 mb-5"
                                      >
                                        <span className="h-[30px] w-[30px] bg-[#D9D9D9] block rounded-full" />
                                        <Link
                                          href={menuItem.link}
                                          className="text-sm flex"
                                        >
                                          {menuItem.name}
                                          {menuIndex ===
                                            item.megaMenuContent.length - 1 && (
                                            <MenuIcon
                                              className="ml-4 cursor-pointer"
                                              onClick={() => toggleMenu(item)} // Pass the item to toggle the menu content
                                            />
                                          )}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                                {/* Sliding Menu under MegaMenuPortal */}
                                {isMenuOpen && menuContent && (
                                  <motion.div
                                    ref={menuRef} // Reference to menu container
                                    className="absolute top-0 right-0 w-64 bg-white p-4 z-20"
                                    initial={{ x: "100%" }} // Initial position to the right
                                    animate={{
                                      x: isMenuOpen ? 0 : "100%", // Slide in when menu is open, slide out when closed
                                    }}
                                    exit={{ x: "100%" }} // Ensure smooth transition to the right when closed
                                    transition={{
                                      type: "spring",
                                      stiffness: 300,
                                      damping: 30, // Smooth and natural animation
                                      duration: 0.5, // Duration for closing animation
                                    }}
                                  >
                                    <button
                                      className="text-white mb-4"
                                      onClick={() => setIsMenuOpen(false)} // Close menu on button click
                                    >
                                      Close Menu
                                    </button>
                                    {/* Render dynamic content based on clicked item */}
                                    <ul>
                                      {menuContent.map((menuItem, index) => (
                                        <li
                                          key={index}
                                          className="text-secondary"
                                        >
                                          <Link href={menuItem.link}>
                                            {menuItem.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </motion.div>
                                )}
                              </div>
                            </div>
                          </div>
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
