"use client";

import Logo from "../molecules/Logo";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "../atoms/CustomIcon";
import AsideContainer from "./AsideContainer";
import { emitter } from "@/tools/eventBus";
import SearchBar from "../molecules/SearchBar";
import { useRef } from "react";
import AsideUser from "./AsideUser";
import AsideNavigation from "./AsideNavigation";

export default function Header() {
  const headerRef = useRef<HTMLHeadElement | null>(null);

  return (
    <header
      className="bg-tint-dark sticky top-0 z-50 m-0 flex w-full flex-row items-center justify-between gap-3 px-3 py-3"
      ref={headerRef}
    >
      <div className="flex items-center gap-3">
        <button
          className="aspect-square w-11 cursor-pointer"
          type="button"
          onClick={() => emitter.emit("toggleNavigation")}
        >
          <CustomIcon
            icon={faBars}
            size="2xl"
            hasRounding={false}
            hasBackground={true}
          />
        </button>

        <a className="text-foreground" href="#">
          <Logo />
        </a>
      </div>

      <div className="flex items-center gap-3">
        <SearchBar anchorContainer={headerRef.current} />
        <AsideContainer eventTarget="toggleNavigation">
          <AsideNavigation />
        </AsideContainer>
        <button
          className="aspect-square w-11"
          onClick={() => emitter.emit("toggleUser")}
        >
          <CustomIcon
            icon={faUser}
            size="xl"
            hasRounding={true}
            hasBackground={true}
            hasIconRounding={true}
          />
        </button>
        <AsideContainer eventTarget="toggleUser">
          <AsideUser />
        </AsideContainer>
      </div>
    </header>
  );
}
