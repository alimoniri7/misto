import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/slices/counter";
import BtnContained from "@/components/buttons/BtnContained";
import RemoveChip from "@/components/chip/RemoveChip";
import CheckBox from "@/components/checkboxes/CheckBox";
import Topbar from "@/components/Topbar";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(0);
  const hello = () => alert("hello");

  const [checked, setChecked] = useState(false);

  return (
    <div>
      <Topbar />
      {/* <div
        style={{
          width: "1000px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      > */}

        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}>
        increment by amount
      </button> */}
    </div>
  );
}
