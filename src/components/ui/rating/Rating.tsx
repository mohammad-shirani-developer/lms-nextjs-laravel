import { IconStar } from "@/components/icons/icons";
import { Size } from "../@types/common-props.types";
import { RatingProps } from "./rating.types";

// export type Size = "xs" | "sm" | "md" | "lg";
const sizeClasses: Record<Size, number> = {
  xs: 14,
  sm: 18,
  md: 24,
  lg: 30,
};

const Rating = ({
  rate,
  className,
  size = "md",
  variant = "warning",
}: RatingProps) => {
  return (
    <div className={`flex gap-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((index) => (
        <IconStar
          key={`star-${index}`}
          width={sizeClasses[size]}
          height={sizeClasses[size]}
          fill={rate >= index ? `var(--color-${variant})` : ""}
          color={rate >= index ? `var(--color-${variant})` : "currentColor"}
        />
      ))}
    </div>
  );
};

export default Rating;
