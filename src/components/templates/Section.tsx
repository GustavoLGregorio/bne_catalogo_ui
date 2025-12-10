import React from "react";
import TitleRedirect from "../molecules/TitleRedirect";

export type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section(props: SectionProps) {
  return (
    <section className={`flex flex-col gap-1 px-3 mb-6 ${props.className}`}>
      {props.children}
    </section>
  );
}
