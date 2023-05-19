// 'use client'
import React from "react";

import Counter from "@/components/Counter";
// import BtnContained from "@/components/buttons/BtnContained";
import RemoveChip from "@/components/chip/RemoveChip";
import CheckBox from "@/components/checkboxes/CheckBox";
import Topbar from "@/components/Topbar";
import BtnContained from "@/components/buttons/BtnContained";
import Navbar from "@/components/navbar/Navbar";

export default function Count() {
  const hello = () => alert("hello");

  // const [checked, setChecked] = useState(false);

  return (
    <div>
      <Topbar />
      <Navbar/>
      <BtnContained>تلاش مجدد </BtnContained>
      {/* <CheckBox size="medium" onChange={()=>setChecked(prev=> !prev)} value={checked} label='XL'/> */}
      <RemoveChip>پاک کردن همه</RemoveChip>
      {/* <div className="bg-black-gray  w-80 h-80">hello</div> */}
      {/* <Counter/> */}
    </div>
  );
}
