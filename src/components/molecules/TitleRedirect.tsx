import type { Url } from "url";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "../atoms/CustomIcon";

export type TitleRedirectProps = {
  title: string;
  redirectTo: string;
};

export default function TitleRedirect(props: TitleRedirectProps) {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <h2 className="font-inter text-[22px] font-semibold">{props.title}</h2>
      <Link href={props.redirectTo} className="aspect-square w-5">
        <CustomIcon
          icon={faArrowRight}
          size="lg"
          hasRounding={true}
          hasBackground={false}
          removePadding={true}
        />
      </Link>
    </div>
  );
}
