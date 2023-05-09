import React from "react";

const PhoneFilled = ({
  fill,
  width="24",
  height="24"
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.8">
        <path
          d="M3 5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H8.28C8.48979 3.00016 8.69422 3.0663 8.86436 3.18905C9.03449 3.3118 9.16171 3.48496 9.228 3.684L10.726 8.177C10.8019 8.40534 10.7929 8.65339 10.7007 8.87564C10.6085 9.0979 10.4393 9.27945 10.224 9.387L7.967 10.517C9.07332 12.9655 11.0345 14.9267 13.483 16.033L14.613 13.776C14.7205 13.5607 14.9021 13.3915 15.1244 13.2993C15.3466 13.2071 15.5947 13.1981 15.823 13.274L20.316 14.772C20.5152 14.8383 20.6885 14.9657 20.8112 15.136C20.934 15.3064 21.0001 15.511 21 15.721V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C9.716 21 3 14.284 3 6V5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export default PhoneFilled;
