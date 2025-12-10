import CardBook from "./CardBook";
import Section from "../templates/Section";
import CustomIcon from "../atoms/CustomIcon";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Carousel() {
  return (
    <Section className="mt-4">
      <CardBook />
      <div className="flex items-center justify-between py-3.5">
        <button className="aspect-square w-[30px] cursor-pointer" type="button">
          <CustomIcon
            icon={faArrowLeft}
            size="md"
            hasRounding={true}
            hasBackground={true}
            backgroundColor="bg-foreground-ligth"
          />
        </button>
        <span className="font-inter font-bold">1/10</span>
        <button className="aspect-square w-[30px] cursor-pointer" type="button">
          <CustomIcon
            icon={faArrowRight}
            size="md"
            hasRounding={true}
            hasBackground={true}
            backgroundColor="bg-foreground-ligth"
          />
        </button>
      </div>
    </Section>
  );
}
