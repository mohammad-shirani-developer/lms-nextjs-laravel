import { IconUserProfile } from "@/components/icons/icons";
import Image from "next/image";
import { tv } from "tailwind-variants";
import { AvatarProps } from "./avatar.types";

const avatar = tv({
  base: "flex justify-center items-center aspect-square overflow-hidden rounded-full ring-2 ring-offset-base-100 ring-offset-2 bg-base-50",
  variants: {
    variant: {
      neutral: "ring-base-50",
      primary: "ring-primary",
      secondary: "ring-secondary",
      accent: "ring-accent",
      info: "ring-info",
      success: "ring-success",
      warning: "ring-warning",
      error: "ring-error",
      ghost: "ring-base-100",
    },
    size: {
      xs: "w-10 h-10", // 40px
      sm: "w-[50px] h-[50px]",
      md: "w-[70px] h-[70px]",
      lg: "w-[120px] h-[120px]",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const Avatar = ({
  variant = "primary",
  size = "md",
  className,
  src,
  alt = "",
}: AvatarProps) => {
  const classes = avatar({ variant, size, class: className });

  const sizePx =
    size === "xs" ? 40 : size === "sm" ? 50 : size === "md" ? 70 : 120;

  return (
    <div className={classes}>
      {src ? (
        <Image
          src={src}
          width={sizePx}
          height={sizePx}
          alt={alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <IconUserProfile
          width={sizePx / 2}
          height={sizePx / 2}
          className="opacity-50 text-primary"
        />
      )}
    </div>
  );
};

export default Avatar;
