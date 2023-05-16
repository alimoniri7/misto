import React from "react";

import Counter from "@/components/Counter";
// import BtnContained from "@/components/buttons/BtnContained";
// import RemoveChip from "@/components/chip/RemoveChip";
// import CheckBox from "@/components/checkboxes/CheckBox";
import Topbar from "@/components/Topbar";
// import Navbar from "@/components/Navbar";

export default function Count() {
//   const hello = () => alert("hello");

//   const [checked, setChecked] = useState(false);

  return (
    <div>
      <Topbar />
      {/* <Navbar/> */}
      <Counter/>
    </div>
  );
}
