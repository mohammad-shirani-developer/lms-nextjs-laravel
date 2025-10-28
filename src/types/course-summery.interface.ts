import { CourseLevel } from "@/enums/course-level.enum";

export interface CourseSummary {
  id: number;
  title: string;
  courseCategoryId: number;
  duration: string;
  level?: string | null;
  levelNumber: CourseLevel;
  averageReviewRating: number | null;
  numOfReviews: number | null;
  recordStatus: string;
  slug: string;
  subTitle: string;
  isFree: boolean;
  basePrice: number;
  // Images from Resource table
  coverImageId?: number | null;
  coverImageUrl?: string | null;
  profileImageId?: number | null;
  profileImageUrl?: string | null;
}
