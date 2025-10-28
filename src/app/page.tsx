import { API_URL } from "@/config/global";
import { CourseSummary } from "@/types/course-summery.interface";
import CourseCardList from "./(courses)/_components/CourseCardList";
import Hero from "./_components/Hero";
import Testimonials from "./_components/Testimonials";

async function getNewestCourse(count: number): Promise<CourseSummary[]> {
  const res = await fetch(`${API_URL}/courses/newest/${count}`, {
    // next: { revalidate: 24 * 60 * 60 },
  });

  return res.json();
}

export default async function Home() {
  const newestCourses = await getNewestCourse(4);

  return (
    <>
      <Hero />
      <section className="container mx-auto py-8">
        <CourseCardList courses={newestCourses} />
      </section>
      <section className="container mx-auto py-8">
        <Testimonials />
      </section>
    </>
  );
}
