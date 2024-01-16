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
      className={` text-primary text-3xl md:text-6xl font-semibold relative before:content-[''] before:absolute before:top-0  before:w-[100px] before:h-[10px] before:bg-primary before:left-0 py-5  ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
