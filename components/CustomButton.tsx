"use client";
import { CustomButtonProps } from "@/types";
import { title } from "process";
import React from "react";

const CustomButton = ({
  containerStyles,
  title,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
