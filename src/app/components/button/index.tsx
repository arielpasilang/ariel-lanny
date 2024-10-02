import React from "react";
import Link from "next/link";

interface ButtonProps {
  style: string;
  value: string;
}

const Button: React.FC<ButtonProps> = ({ style, value }) => {
  return (
    <a
      className={`${
        style === "primary"
          ? "bg-primary-color text-white "
          : "bg-white text-primary-color border-primary-color "
      } p-4 rounded-lg block text-2xl border`}
    >
      {value}
    </a>
  );
};

export default Button;
