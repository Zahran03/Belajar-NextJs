import { MouseEventHandler, SetStateAction } from "react";

export interface CustomButtonProps {
  containerStyles?: string;
  title: string;
  btnType?: "button" | "submit";
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
