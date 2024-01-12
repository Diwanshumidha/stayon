import React from "react";

const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={` text-primary text-3xl md:text-6xl font-semibold border-solid border-t-[15px] py-2 border-primary w-max ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
