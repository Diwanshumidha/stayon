import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {};

const Button = ({ className, children, ...props }: Props) => {
  return (
    <button
      className={` bg-white text-primary rounded-full px-5 py-2 hover:bg-primary hover:shadow-2xl hover:text-white focus-visible:bg-primary focus-visible:text-white hover:ring-2 ring-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
