"use client";

import { useState } from "react";
import { tv } from "tailwind-variants";
import { TabsProps } from "./tabs.types";

const tabsWrapper = tv({
  base: "w-full",
});

const tabLabels = tv({
  base: "relative gap-4 mb-5 inline-flex cursor-pointer select-none flex-wrap items-center justify-center text-center dark:text-base-content/70",
});

const tabLabel = tv({
  base: "text-current font-bold pb-2 transition-all duration-75 border-b border-transparent text-sm xl:text-xl",
  variants: {
    active: {
      true: "dark:text-primary border-b dark:border-primary",
    },
  },
});

const tabContent = tv({
  base: "leading-10 text-lg min-h-screen",
});

const Tabs = ({ tabs }: TabsProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={tabsWrapper()}>
      <div className={tabLabels()}>
        {tabs.map((tab, index) => (
          <a
            key={`tab-${index}`}
            className={tabLabel({ active: index === activeTab })}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </a>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          className={tabContent()}
          key={`tab-content-${index}`}
          style={{ display: activeTab !== index ? "none" : "block" }}
        >
          {typeof tab.content === "string" ? (
            <div
              dangerouslySetInnerHTML={{
                __html: tab.content as TrustedHTML,
              }}
            />
          ) : (
            tab.content
          )}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
