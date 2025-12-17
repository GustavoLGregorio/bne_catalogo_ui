import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type CustomIconProps = {
  icon: IconDefinition;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "6xl";
  hasRounding: boolean;
  hasBackground: boolean;
  hasIconRounding?: boolean;
  removePadding?: boolean;
  color?: string;
  backgroundColor?: string;
};

export default function CustomIcon(props: CustomIconProps) {
  const getIconSize = () => {
    let iconSize: string;

    switch (props.size) {
      case "sm":
        iconSize = "text-[10px]";
        break;
      case "md":
        iconSize = "text-[16px]";
        break;
      case "lg":
        iconSize = "text-[20px]";
        break;
      case "xl":
        iconSize = "text-[22px]";
        break;
      case "2xl":
        iconSize = "text-[26px]";
        break;
      case "6xl":
        iconSize = "text-[64px]";
        break;
      default:
        iconSize = "text-[18px]";
    }

    return iconSize;
  };

  return (
    <span
      className={`flex h-full w-full items-center justify-center ${
        !props.removePadding
          ? props.hasRounding
            ? "rounded-full p-2.5"
            : "rounded-lg p-2"
          : "p-0"
      } ${props.hasBackground && (props.backgroundColor ?? "bg-tint-light")}`}
    >
      <span
        className={`${getIconSize()} ${props.hasIconRounding ? "overflow-hidden rounded-full" : ""} flex items-center justify-center`}
      >
        <FontAwesomeIcon
          className={`text-inherit`}
          icon={props.icon}
          color={props.color ?? "#ffffff"}
        />
      </span>
    </span>
  );
}
