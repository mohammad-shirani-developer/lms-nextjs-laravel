import BaseIcon from "@/components/icons/BaseIcon";
import type { SvgIcon } from "@/components/icons/icon.types";
export default function SvgIcon(props: SvgIcon) {
  return (
    <BaseIcon {...props}>
      {" "}
      <path d="M21 7.5L12 16.5L3 7.5" />{" "}
    </BaseIcon>
  );
}
