import * as React from "react";
const Tick = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="m18.75 33.688-7.23-7.23a2.078 2.078 0 0 0-2.937 2.938l8.708 8.708a2.075 2.075 0 0 0 2.938 0L42.27 16.063a2.078 2.078 0 0 0-2.937-2.938L18.75 33.688Z"
    />
  </svg>
);
export default Tick;
