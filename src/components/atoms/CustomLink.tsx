import React from "react";
import type { ClickableProps } from "./CustomInput";
import Link, { LinkProps } from "next/link";

export type CustomLinkProps = {
  href: LinkProps["href"];
  style: ClickableProps["style"] | "rounded";
};

export default function CustomLink(props: CustomLinkProps) {
  return <Link className="" href={props.href} />;
}
