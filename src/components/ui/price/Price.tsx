import { IconToman } from "@/components/icons/icons";
import { tv } from "tailwind-variants";
import { Badge } from "../badge";
import { PriceProps } from "./price.types";

// تعریف کلاس‌های متن بر اساس سایز
const priceSize = tv({
  variants: {
    size: {
      xs: "text-md",
      sm: "text-xl",
      md: "text-2xl",
      lg: "text-3xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

// سایز SVG بر اساس سایز متن
const svgSizeMap: Record<NonNullable<PriceProps["size"]>, number> = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 22,
};

const Price = ({
  size = "md",
  text = "رایگان",
  price,
  className,
}: PriceProps) => {
  // استفاده امن از size با مقدار پیش‌فرض
  const finalSize = size ?? "md";
  const textClass =
    priceSize({ size: finalSize }) + (className ? ` ${className}` : "");
  const svgSize = svgSizeMap[finalSize];

  return (
    <>
      {price != null && price > 0 ? (
        <span
          className={`gap-1 font-bold flex items-center dark:text-white/90 ${textClass}`}
        >
          {price.toLocaleString()}
          <IconToman
            strokeWidth={1}
            width={svgSize}
            height={svgSize}
            viewBox="0 0 16 16"
          />
        </span>
      ) : (
        <Badge variant="accent" size="sm">
          {text}
        </Badge>
      )}
    </>
  );
};

export default Price;
