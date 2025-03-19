import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";

interface TabComponentProps {
  value: string;
  title: string;
  children: React.ReactNode;
  isActive: boolean;
  onTabClick: (value: string) => void; // Callback function to update active tab state
}

const TabComponent = ({
  value,
  title,
  children,
  isActive,
  onTabClick,
}: TabComponentProps) => {
  return (
    <Tabs defaultValue={value}>
      {/* Flex container for horizontal tabs */}
      <div className="tabs-title-container">
        <TabsList className="flex">
          <TabsTrigger
            value={value}
            onClick={() => onTabClick(value)} // Update the active tab on click
            className={`px-4 py-2 cursor-pointer ${
              isActive ? "font-bold text-blue-600" : "text-gray-600"
            }`}
          >
            {title}
          </TabsTrigger>
        </TabsList>
      </div>

      {/* Render content only if tab is active */}
      <div className="tabs-content-container mt-2">
        <TabsContent value={value}>{isActive && children}</TabsContent>
      </div>
    </Tabs>
  );
};

export default TabComponent;
