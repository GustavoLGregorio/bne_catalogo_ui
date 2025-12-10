import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "@/components/atoms/CustomIcon";

export default function Logo() {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <span className="aspect-square w-[26px]">
        <CustomIcon
          icon={faBookOpen}
          size="2xl"
          hasRounding={false}
          hasBackground={false}
          removePadding={true}
        />
      </span>
      <span className={`font-inter text-[22px] font-bold`}>ClearLib</span>
    </div>
  );
}
