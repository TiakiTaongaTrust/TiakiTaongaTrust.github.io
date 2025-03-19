"use client";
import React, { useState } from "react";
import CardDetail from "@/app/components/card/CardDetail";
import LibraryNavigation from "@/app/components/navigations/LibraryNavigation";
import { MediaVideosTabs } from "@/constants";

const Page = () => {
  // Maintain the active tab state
  const [activeTab, setActiveTab] = useState("General Content");

  const handleTabClick = (tabTitle: any) => {
    setActiveTab(tabTitle);
  };

  return (
    <>
      <LibraryNavigation title="Media (Videos)" />

      <div className="flex flex-col p-4">
        {/* Tab Titles Section */}
        <div className="tabs-titles flex space-x-6 mb-4">
          {MediaVideosTabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => handleTabClick(tab.title)}
              className={`px-6 py-2 cursor-pointer rounded-md transition-colors duration-200 ${
                activeTab === tab.title
                  ? "font-bold text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content Section */}
        <div className="tabs-content">
          {MediaVideosTabs.map(
            (tab) =>
              activeTab === tab.title && (
                <div key={tab.title} className="tab-content">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {tab.cardContent.map((card, index) => (
                      <div
                        key={index}
                        className=" p-6 flex flex-col justify-between"
                      >
                        <div className="flex flex-col">
                          <h2 className="text-heading-5 font-semibold text-accent mb-2">
                            {card.title}
                          </h2>
                          <p className="text-sm text-gray-600 flex-grow">
                            {card.description}
                          </p>
                        </div>
                        <button className="mt-4 inline-flex items-center justify-center px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 transition-all">
                          {card.buttonText}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
