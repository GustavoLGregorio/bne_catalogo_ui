"use client";

import Logo from "../molecules/Logo";
import { faBars, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import CustomIcon from "../atoms/CustomIcon";
import HeaderNavigation from "./HeaderNavigation";
import { emitter } from "@/tools/eventBus";

export default function Header() {
  return (
    <header className="bg-tint-dark sticky top-0 z-50 m-0 flex w-full flex-row items-center justify-between gap-3 px-3 py-3">
      <div className="flex items-center gap-3">
        <button
          className="aspect-square w-11 cursor-pointer"
          type="button"
          onClick={() => emitter.emit("navToggler")}
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
        <button className="aspect-square w-[34px]">
          <CustomIcon
            icon={faSearch}
            size="lg"
            hasRounding={false}
            hasBackground={true}
          />
        </button>
        <HeaderNavigation />
        <button className="aspect-square w-11">
          <CustomIcon
            icon={faUser}
            size="xl"
            hasRounding={true}
            hasBackground={true}
            hasIconRounding={true}
          />
        </button>
      </div>
    </header>
  );
}
