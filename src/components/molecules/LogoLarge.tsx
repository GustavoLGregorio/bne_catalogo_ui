import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "@/components/atoms/CustomIcon";

export default function LogoLarge() {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <span className={`aspect-square`}>
        <CustomIcon
          icon={faBookOpen}
          size="6xl"
          hasRounding={false}
          hasBackground={false}
          removePadding={true}
        />
      </span>
      <span className={`font-inter text-[44px] font-bold`}>ClearLib</span>
    </div>
  );
}
