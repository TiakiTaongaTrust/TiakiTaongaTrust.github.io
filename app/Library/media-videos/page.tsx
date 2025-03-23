"use client";
import React, { useState } from "react";
import CardDetail from "@/app/components/card/CardDetail";
import LibraryNavigation from "@/app/components/navigations/LibraryNavigation";
import { MediaVideosTabs } from "@/constants";
import { title } from "process";

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
        <div className="tabs-titles flex justify-center space-x-6 my-12">
          {MediaVideosTabs.map((tab) => (
            <button
              key={tab.title}
              onClick={() => handleTabClick(tab.title)}
              className={` cursor-pointer rounded-full px-10 py-3 ${
                activeTab === tab.title
                  ? "font-bold bg-tabs-background text-white"
                  : "text-accent font-bold bg-tabs"
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
                  <h5 className="text-accent text-md font-bold my-10">
                    {activeTab}
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {tab.cardContent.map((card, index) => (
                      <CardDetail
                        key={index}
                        title={card.title}
                        description={card.description}
                        titleDesc={card.titleDesc}
                        buttonText={card.buttonText}
                      />
                    ))}
                  </div>
                </div>
              )
          )}
        </div>
      </div>

      <div className="bg-card h-1 w-full" />
    </>
  );
};

export default Page;
