"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { NAV_ITEMS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { MenuIcon } from "lucide-react";
import { motion } from "framer-motion";

// Portal for the mega menu
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuContent, setMenuContent] = useState<any>(null);
  const menuRef = useRef<HTMLDivElement>(null);

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
    setHoveredItem(null);
  };

  // Toggle the submenu for a mega menu item
  const toggleMenu = (item: any) => {
    setIsMenuOpen((prev) => !prev);
    setMenuContent(item.megaMenuContent);
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
                    className="relative flex-none w-1/3 text-center px-4 py-2 cursor-pointer"
                    onMouseEnter={() =>
                      setHoveredItem(item.hasMegaMenu ? index : null)
                    }
                    onMouseLeave={() => {
                      if (!isNavHovered) setHoveredItem(null);
                    }}
                    aria-haspopup={item.hasMegaMenu ? "true" : "false"}
                    aria-expanded={hoveredItem === index}
                  >
                    <motion.span
                      className="relative"
                      whileHover={{ width: "100%" }}
                      initial={{ width: 0 }}
                      animate={{ width: hoveredItem === index ? "100%" : "0%" }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.name}
                      <motion.div
                        className="absolute bottom-[-5px] left-0 h-[3px] bg-white"
                        initial={{ width: "0%" }}
                        animate={{
                          width: hoveredItem === index ? "100%" : "0%",
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.span>

                    {item.hasMegaMenu &&
                      hoveredItem === index &&
                      item.megaMenuContent && (
                        <MegaMenuPortal
                          className="absolute top-[90px] left-0 w-full bg-secondary shadow-lg p-4 z-10"
                          onMouseEnter={() => setHoveredItem(index)}
                          onMouseLeave={() => setHoveredItem(null)}
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
                                          className="text-sm flex items-center"
                                        >
                                          {menuItem.name}
                                          {menuItem.isSubmenu && (
                                            <MenuIcon
                                              className="ml-4 cursor-pointer"
                                              onClick={(e) => {
                                                e.preventDefault();
                                                toggleMenu(item);
                                              }}
                                            />
                                          )}
                                        </Link>
                                      </li>
                                    )
                                  )}
                                </ul>
                                {/* Sliding submenu (only visible if the last item has submenu flag) */}
                                {isMenuOpen &&
                                  menuContent &&
                                  menuContent[menuContent.length - 1]
                                    ?.isSubmenu && (
                                    <motion.div
                                      ref={menuRef}
                                      className="absolute top-0 right-0 w-[75%] h-[220px] bg-white p-4 z-20 shadow-lg"
                                      initial={{ x: "100%" }}
                                      animate={{ x: 0 }}
                                      exit={{ x: "100%" }}
                                      transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                        duration: 0.5,
                                      }}
                                    >
                                      {menuContent[menuContent.length - 1]
                                        ?.subMenu &&
                                        menuContent[menuContent.length - 1]
                                          ?.subMenu.length > 0 && (
                                          <div>
                                            <h2 className="text-md font-bold text-primary-heading mb-2">
                                              {
                                                menuContent[
                                                  menuContent.length - 1
                                                ].name
                                              }
                                            </h2>
                                            <ul className="mt-2">
                                              {menuContent[
                                                menuContent.length - 1
                                              ].subMenu.map(
                                                (subItem, subIndex) => (
                                                  <li
                                                    key={subIndex}
                                                    className="text-gray-700"
                                                  >
                                                    <Link
                                                      href={subItem.link}
                                                      className="block p-1 hover:text-primary"
                                                    >
                                                      {subItem.title}
                                                    </Link>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          </div>
                                        )}
                                      <button
                                        className="text-white mb-4 bg-red-500 px-2 py-1 rounded"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        Close Menu
                                      </button>
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
