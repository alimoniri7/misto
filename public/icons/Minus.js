import React from "react";

const Minus = ({
  width="24",
  height="24",
  fill= "#121212"
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="1">
        <path
          d="M18 12H6"
          stroke={fill}
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default Minus;
