"use client";

import { IconChevronDown, IconChevronUp } from "@/components/icons/icons";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { CourseCurriculumProps } from "./course-curriculum.types";

const CourseCurriculum = ({ data }: CourseCurriculumProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // جلوگیری از mismatch بین SSR و client
    return null;
  }

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-base-200 rounded-2xl shadow-md border border-base-300 p-4 space-y-3">
      {data?.map((chapter, index) => (
        <div
          key={`chapter-${chapter.id}`}
          className="rounded-xl bg-base-100 border border-base-300 overflow-hidden"
        >
          <button
            onClick={() => toggleAccordion(index)}
            type="button"
            className={`w-full flex items-center justify-between px-4 py-3 text-sm md:text-base font-semibold transition-all duration-200 ${
              index === activeIndex
                ? "bg-primary/50 text-white"
                : "text-base-content hover:bg-base-200"
            }`}
          >
            <div className="flex items-center justify-between flex-1 min-w-0">
              <div className="flex items-center gap-3 overflow-hidden">
                <span className="h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold bg-base-content/10 shrink-0">
                  {index + 1}
                </span>
                <span className="truncate">{chapter.title}</span>
              </div>

              <div className="flex items-center gap-2 shrink-0 pl-4">
                <Badge variant="info" className="text-xs px-2 py-1">
                  {chapter.numOfLectures} مبحث
                </Badge>
                <Badge variant="accent" className="text-xs px-2 py-1">
                  {chapter.duration}
                </Badge>
              </div>
            </div>

            {activeIndex === index ? (
              <IconChevronUp width={18} />
            ) : (
              <IconChevronDown width={18} />
            )}
          </button>

          {activeIndex === index && (
            <div className="accordion-content bg-base-100 px-6 pb-4 pt-2">
              <ol
                className={`relative pr-4 border-primary/20 ${
                  chapter.lectures.length > 1 ? "border-r-2" : ""
                }`}
              >
                {chapter.lectures.map((lecture) => (
                  <li
                    key={`lecture-${lecture.title}`}
                    className="py-3 border-b border-base-content/10 ml-4 border-dashed last-of-type:border-0"
                  >
                    <span className="absolute flex items-center justify-center w-3 h-3 bg-primary/30 rounded-full -right-[6px]"></span>

                    <h3 className="text-sm md:text-base font-medium flex items-center justify-between text-gray-400">
                      <span>{lecture.title}</span>
                      <Badge variant="info" className="!w-20 mt-1">
                        {lecture.duration}
                      </Badge>
                    </h3>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CourseCurriculum;
