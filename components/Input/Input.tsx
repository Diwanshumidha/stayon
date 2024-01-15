import React from "react";
import "./Input.css";

type props = {
  placeholder: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
  variant?: "input" | "textarea";
};

const Input = ({
  className,
  onChange,
  placeholder,
  value,
  variant = "input",
}: props) => {
  return (
    <div className={`input_wrapper ${className}`}>
      {variant === "textarea" ? (
        <textarea
          className="input textarea w-full h-full"
          placeholder={placeholder}
          required
        />
      ) : (
        <input
          className={`input `}
          placeholder={placeholder}
          required
          type="text"
        />
      )}

      <span className="input-border" />
    </div>
  );
};

export default Input;
