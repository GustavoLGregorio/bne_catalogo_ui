import React from "react";
import { Inter } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

const inter = Inter({ weight: "900" });

export default function Logo() {
  return (
    <div className="flex flex-row gap-2">
      <FontAwesomeIcon icon={faBookOpen} className="w-[26px]"></FontAwesomeIcon>
      <span className={`${inter.className}`}>ClearLib</span>
    </div>
  );
}
