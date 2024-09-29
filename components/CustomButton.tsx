"use client";
import { CustomButtonProps } from "@/types";
import { title } from "process";
import React from "react";

const CustomButton = ({
  containerStyles,
  title,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span>{title}</span>
    </button>
  );
};

export default CustomButton;
