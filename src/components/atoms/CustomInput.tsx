import React from "react";

export type CustomInputProps = {
  id: string;
  name: string;
  type: React.HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  style: ClickableProps["style"];
};

export type ClickableProps = {
  style: "empty" | "tint" | "tint-reverse";
};

export default function CustomInput(props: CustomInputProps) {
  return (
    <input
      id={props.id}
      name={props.name}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      className={`w-full rounded-lg px-4 font-bold ${props.type === "submit" && "cursor-pointer"} py-2 ${props.style === "empty" ? "border-foreground border-2 text-[18px]" : props.style === "tint" ? "text-foreground bg-tint-dark text-[20px]" : "text-tint-dark bg-foreground text-[20px]"}`}
    />
  );
}
