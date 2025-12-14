"use client";

import CustomIcon from "@/components/atoms/CustomIcon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { emitter } from "@/tools/eventBus";

export type SearchBarProps = {
  anchorContainer: HTMLElement | null;
};

export default function SearchBar(props: SearchBarProps) {
  const [anchorSize, setAnchorSize] = useState<[number, number]>([34, 34]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isSearchBarToggled, setIsSearchBarToggled] = useState<boolean>(false);
  enum SearchBarToggle {
    ON = "absolute left-0 flex items-center justify-center",
    OFF = "relative",
  }
  const [searchBarClasses, setSearchBarClasses] = useState<SearchBarToggle>(
    SearchBarToggle.OFF,
  );

  const navSearchBarToggler = () => {
    if (!containerRef.current) return;

    setIsSearchBarToggled((isToggled) => !isToggled);

    const container = containerRef.current;

    if (isSearchBarToggled) {
      setSearchBarClasses(SearchBarToggle.ON);
      container.style.width = `${390}px`;
      container.style.height = `${68}px`;
    } else {
      setSearchBarClasses(SearchBarToggle.OFF);
      container.style.width = `${34}px`;
      container.style.height = `${34}px`;
    }
  };

  useEffect(() => {
    emitter.on("navSearchBarToggler", navSearchBarToggler);

    return () => emitter.off("navSearchBarToggler", navSearchBarToggler);
  }, [isSearchBarToggled, anchorSize, searchBarClasses]);

  if (!isSearchBarToggled) {
    return (
      <div
        className={`${searchBarClasses} h-full w-full bg-[red] transition-all`}
        ref={containerRef}
      >
        <button
          className="aspect-square w-[34px] cursor-pointer"
          onClick={() => emitter.emit("navSearchBarToggler")}
        >
          <CustomIcon
            icon={faSearch}
            size="lg"
            hasRounding={false}
            hasBackground={true}
          />
        </button>
      </div>
    );
  }

  return (
    <div
      className={`${searchBarClasses} h-full w-full bg-[red] transition-all`}
      ref={containerRef}
    >
      <button
        className="aspect-square w-[34px] cursor-pointer"
        onClick={() => emitter.emit("navSearchBarToggler")}
      >
        <CustomIcon
          icon={faSearch}
          size="lg"
          hasRounding={false}
          hasBackground={true}
        />
      </button>
    </div>
  );
}
