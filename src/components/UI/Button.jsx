import React from "react";

const Button = ({
  title,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`p-2 w-full rounded-md font-semibold hover:border-black ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
