import Header from "@/components/organisms/Header";
import TitleRedirect from "@/components/molecules/TitleRedirect";
import Section from "@/components/templates/Section";
import CardContainerHorizontal from "@/components/organisms/CardContainerHorizontal";
import Carousel from "@/components/organisms/Carousel";

export default function HomePage() {
  return (
    <>
      <Header />
      <Carousel></Carousel>
      <Section>
        <TitleRedirect title="Recomendados" redirectTo={"https://google.com"} />
        <CardContainerHorizontal />
      </Section>
      <Section>
        <TitleRedirect title="Recomendados" redirectTo={"https://google.com"} />
        <CardContainerHorizontal />
      </Section>
      <Section>
        <TitleRedirect title="Recomendados" redirectTo={"https://google.com"} />
        <CardContainerHorizontal />
      </Section>
    </>
  );
}
