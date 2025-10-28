import { tv } from "tailwind-variants";
import { Loading } from "../loading";
import { ButtonProps } from "./buttopn.types";

const button = tv({
  base: "btn relative inline-flex items-center justify-center no-underline gap-2 border border-transparent cursor-pointer select-none text-center transition duration-100 ease-in-out rounded-lg",
  variants: {
    variant: {
      primary:
        "dark:border-primary dark:bg-primary dark:text-primary-content dark:outline-primary hover:dark:border-primary-focus hover:dark:bg-primary-focus",
      secondary:
        "dark:border-secondary dark:bg-secondary dark:text-secondary-content dark:outline-secondary hover:dark:border-secondary-focus hover:dark:bg-secondary-focus",
      accent:
        "dark:border-accent dark:bg-accent dark:text-accent-content dark:outline-accent hover:dark:border-accent-focus hover:dark:bg-accent-focus",
      neutral:
        "dark:border-neutral dark:bg-neutral dark:text-base-content dark:outline-neutral hover:dark:border-neutral-focus hover:dark:bg-neutral-focus",
      info: "dark:border-info dark:bg-info dark:text-info-content dark:outline-info hover:dark:border-info hover:dark:bg-info",
      success:
        "dark:border-success dark:bg-success dark:text-base-100 dark:outline-success hover:dark:border-success hover:dark:bg-success",
      warning:
        "dark:border-warning dark:bg-warning dark:text-base-100 dark:outline-warning hover:dark:border-warning hover:dark:bg-warning",
      error:
        "dark:border-error dark:bg-error dark:text-base-100 dark:outline-error hover:dark:border-error hover:dark:bg-error",
      ghost:
        "border border-transparent bg-transparent text-current outline-current hover:dark:bg-base-content hover:bg-black/20",
      link: "border-transparent bg-transparent dark:text-primary outline-none h-auto px-1 hover:underline",
      outline: "border-current bg-transparent text-base-content",
    },
    size: {
      xs: "h-6 px-2 text-xs sm:h-8 sm:px-3 sm:text-sm md:h-7 md:px-4 md:text-sm ",
      sm: "h-10 px-6 text-sm md:h-10 md:px-4 md:text-sm",
      md: "h-12 px-4 text-sm lg:h-14 lg:px-4 lg:text-lg",
      lg: "h-16 px-6 text-lg ",
    },
    shape: {
      default: "",
      wide: "w-64 flex-nowrap",
      block: "w-full",
      square: "h-12 w-12 p-0",
    },
    isDisabled: {
      true: "pointer-events-none border-black/0 dark:bg-neutral/20 dark:text-base-content/20 text-black/20",
      false: "",
    },
    isLoading: {
      true: "pointer-events-none opacity-80",
      false: "",
    },
    animatedIcon: {
      true: "animated-icon",
      false: "",
    },
  },
  compoundVariants: [
    // outline + variant
    {
      variant: "primary",
      class:
        "text-primary hover:border-primary-focus hover:bg-primary-focus hover:text-primary-content",
    },
    {
      variant: "secondary",
      class:
        "text-secondary hover:border-secondary-focus hover:bg-secondary-focus hover:text-secondary-content",
    },
    {
      variant: "accent",
      class:
        "text-accent hover:border-accent-focus hover:bg-accent-focus hover:text-accent-content",
    },
    {
      variant: "success",
      class:
        "text-success hover:border-success hover:bg-success hover:text-base-100",
    },
    {
      variant: "info",
      class: "text-info hover:border-info hover:bg-info hover:text-base-100",
    },
    {
      variant: "warning",
      class:
        "text-warning hover:border-warning hover:bg-warning hover:text-base-100",
    },
    {
      variant: "error",
      class: "text-error hover:border-error hover:bg-error hover:text-base-100",
    },
    // square + sizes (ریسپانسیو)
    {
      shape: "square",
      size: "xs",
      class: "h-6 w-6 p-0 sm:h-8 sm:w-8 md:h-12 md:w-12 lg:h-16 lg:w-16",
    },
    {
      shape: "square",
      size: "sm",
      class: "h-8 w-8 p-0 md:h-12 md:w-12 lg:h-16 lg:w-16",
    },
    { shape: "square", size: "lg", class: "h-16 w-16 p-0" },
  ],
  defaultVariants: {
    size: "md",
    shape: "default",
    variant: "neutral",
    isDisabled: false,
    isLoading: false,
    animatedIcon: false,
  },
});

const Button = ({
  variant,
  color,
  size,
  shape,
  isDisabled,
  isOutline,
  isLoading,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست",
  type = "button",
  animatedIcon,
  children,
  className,
  ...rest
}: ButtonProps) => {
  // اگر color داده شده، به variant نگاشت می‌کنیم
  const finalVariant = isOutline ? "outline" : color ?? variant;

  const classes = button({
    variant: finalVariant,
    size,
    shape,
    isDisabled,
    isLoading,
    animatedIcon,
    class: className,
  });

  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {isLoading && <Loading types={loadingType} />}
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;
