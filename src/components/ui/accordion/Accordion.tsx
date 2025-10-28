"use client";
import { useState } from "react";
import { tv } from "tailwind-variants";

import { IconChevronDown, IconChevronUp } from "@/components/icons/icons";
import { AccordionProps } from "./accordion.types";

// 🎨 تعریف استایل‌ها با tailwind-variants
const accordion = tv({
  slots: {
    base: "rounded-t-xl overflow-hidden divide-y divide-base-300",
    titleButton:
      "flex w-full items-center justify-between text-base font-medium text-right p-5 border-b border-base-300 transition-all duration-200 dark:bg-base-50 dark:border-white/5 dark:hover:bg-base-25",
    content:
      "p-5 text-base leading-8 bg-base-100 dark:bg-base-75 transition-all duration-200",
  },
  variants: {
    active: {
      true: {
        titleButton: "text-primary bg-base-200 dark:bg-base-50/50",
      },
      false: {
        titleButton: "text-base-content",
      },
    },
  },
  defaultVariants: {
    active: false,
  },
});

const Accordion = ({ data }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const styles = accordion(); // برای دسترسی به slots

  return (
    <div className={styles.base()}>
      {data.map((item, index) => {
        const isActive = index === activeIndex;
        const slot = accordion({ active: isActive }); // اعمال variant
        return (
          <div key={`accordion-${item.id}`}>
            <h2>
              <button
                onClick={() => toggleAccordion(index)}
                type="button"
                aria-expanded={isActive}
                className={slot.titleButton()}
              >
                <span>{item.title}</span>
                {isActive ? (
                  <IconChevronUp width={18} />
                ) : (
                  <IconChevronDown width={18} />
                )}
              </button>
            </h2>
            {isActive && <div className={slot.content()}>{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
