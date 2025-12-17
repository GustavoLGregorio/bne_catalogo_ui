"use client";

import React, { useEffect, useRef, useState } from "react";
import CustomIcon from "@/components/atoms/CustomIcon";
import Logo from "@/components/molecules/Logo";
import { faX, faHouse, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { emitter } from "@/tools/eventBus";
import Footer from "@/components/atoms/Footer";
import type { EmitterType } from "@/tools/eventBus";

export type AsideContainerProps = {
  children: React.ReactNode;
  eventTarget: keyof EmitterType;
};

export default function AsideContainer(props: AsideContainerProps) {
  const [navIsOpen, setNavIsOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleToggleNavigation = () => {
      setNavIsOpen((isOpen) => !isOpen);

      if (!navRef.current) return;

      if (navIsOpen) {
        navRef.current.classList.replace("-right-full", "left-0");
      } else {
        navRef.current.classList.replace("left-0", "-right-full");
      }
    };
    const handleToggleUser = () => {
      console.info("Toggle User");
    };

    emitter.on("toggleNavigation", handleToggleNavigation);
    emitter.on("toggleUser", handleToggleUser);

    return () => {
      emitter.off("toggleNavigation", handleToggleNavigation);
      emitter.off("toggleUser", handleToggleUser);
    };
  }, [navRef.current, navIsOpen]);

  return (
    <aside className={`fixed top-0 -right-full h-full w-full`} ref={navRef}>
      {props.children}
      <button
        className="bg-nav-background-layer h-full w-full cursor-pointer"
        type="button"
        onClick={() => emitter.emit(props.eventTarget)}
      ></button>
    </aside>
  );
}
