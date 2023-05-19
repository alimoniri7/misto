"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BtnContained = ({ dark = true, children, onClick, href, className }) => {
   const [clickEffect, setClickEffect] = useState(false);
   const router = useRouter();
   const clickHandler = () => {
      setClickEffect(true);
      if (href) router.push(href);
      if (onClick) onClick();
   };

   let color;
   if (dark) {
      color =
         "bg-gradient-to-tr from-black-gray to-dark-gray hover:from-dark-gray hover:to-dark-gray text-white";
   } else {
      color = "bg-white-gray hover:bg-light-gray text-black-gray";
   }

   return (
      <button
         onClick={clickHandler}
         className={`${color}  relative inline-flex group items-center transition-all duration-200 ease-out justify-center px-4 py-2 m-1 cursor-pointer active:shadow-none shadow-lg overflow-hidden  ${className}`}
      >
         <span
            className={`${
               clickEffect && "animate-bubble"
            } absolute bg-white rounded-full `}
            onAnimationEnd={() => setClickEffect(false)}
         ></span>

         <span className="relative">{children}</span>
      </button>
   );
};

export default BtnContained;