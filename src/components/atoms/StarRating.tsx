import CustomIcon from "./CustomIcon";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating() {
  return (
    <div className="bg-background-ligth flex w-max flex-row items-center justify-center gap-1 rounded-md px-1.5 py-0.5">
      <span className="font-inter text-[10px] font-bold">4.5</span>
      <span className="w-2.5">
        <CustomIcon
          icon={faStar}
          size="sm"
          hasRounding={true}
          hasBackground={false}
          removePadding={true}
          color="gold"
        />
      </span>
    </div>
  );
}
