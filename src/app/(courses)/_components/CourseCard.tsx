import { IconArrowLeftFill, IconClock } from "@/components/icons/icons";
import { Badge } from "@/components/ui/badge";
import { Price } from "@/components/ui/price";
import { CourseSummary } from "@/types/course-summery.interface";
import Image from "next/image";
import Link from "next/link";

type CourseCardProps = CourseSummary;
const CourseCard = ({
  title,
  coverImageUrl,
  subTitle,
  level,
  recordStatus,
  basePrice,
  duration,
  slug,
}: CourseCardProps) => {
  return (
    <div className="card">
      <figure>
        <Image src={coverImageUrl!} alt={title} width={550} height={327} />
      </figure>
      <div className="mt-2 flex justify-between gap-2  px-3 py-2">
        <Badge variant="primary">{level}</Badge>
        <Badge variant="accent">{recordStatus}</Badge>
      </div>
      <div className="card-body">
        <Link href={`/course/${slug}`} className="card-title">
          {title}
        </Link>
        <p>{subTitle}</p>
        <div className="flex items-center justify-between mt-3">
          <Badge variant="primary">
            <IconClock width={16} height={16} />
            {duration}
          </Badge>

          <Price price={basePrice} />
        </div>
      </div>

      <Link
        className="card-footer animated-icon justify-center"
        href={`/courses/${slug}`}
      >
        مشاهده جزئیات دوره
        <IconArrowLeftFill fill="currentColor" />
      </Link>
    </div>
  );
};

export default CourseCard;
