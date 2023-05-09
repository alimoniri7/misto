import React from "react";

const X = ({
  width="24",
  height="24",
  fill='#121212'
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 6L18 18M6 18L18 6L6 18Z"
        stroke={fill}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default X;
