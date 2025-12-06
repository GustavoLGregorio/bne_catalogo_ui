import { colors } from "@/consts/Colors";
import React from "react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-tint-dark w-full">
      <a className="text-foreground text-[22px] px-3 py-2.5" href="#">
        <Logo />
      </a>
    </header>
  );
}
