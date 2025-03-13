"use client";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronRight, ChevronLeft } from "lucide-react"; // For navigation icons
import { LearningCategories } from "@/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

// const SLIDES = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];
const OPTIONS = { loop: false, slidesToScroll: 3 }; // Scroll 3 slides at a time

const CategorySlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateButtons);
    updateButtons();
  }, [emblaApi, updateButtons]);
  const totalPages = Math.ceil(LearningCategories.length / 3);
  return (
    <div className="relative mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {LearningCategories.map((slide, index) => (
            <div key={index} className="flex-[0_0_33.333%] p-2 h-full">
              <div className="bg-card h-full overflow-hidden">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  height={0}
                  width={0}
                  sizes="100"
                  style={{ height: "333px", width: "100%" }}
                />
                <div className="p-4 text-left">
                  <h2 className="text-md text-accent font-bold min-h-[80px]">
                    {slide.title}
                  </h2>
                  <p className="text-sm text-accent min-h-[150px]">
                    {slide.description}
                  </p>
                  <Button className="mt-2">{slide.buttonText}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => emblaApi && emblaApi.scrollPrev()}
        disabled={!canScrollPrev}
        className={`  ${
          canScrollPrev ? "text-black" : " text-[#D9D9D9]"
        } absolute transform -translate-x-[-30rem]  p-2 rounded-full disabled:opacity-50`}
      >
        <ChevronLeft size={60} />
      </button>

      <button
        onClick={() => emblaApi && emblaApi.scrollNext()}
        disabled={!canScrollNext}
        className={` ${
          canScrollNext ? " text-black" : " text-[#D9D9D9]"
        } absolute right-0 transform -translate-x-[30rem]  p-2 rounded-full disabled:opacity-50`}
      >
        <ChevronRight size={60} />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-7">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            className={`w-[20px] h-[20px] rounded-full ${
              index === selectedIndex ? "bg-accent" : "bg-[#D9D9D9]"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
