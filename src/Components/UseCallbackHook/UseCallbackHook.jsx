import axios from "axios";
import { useCallback, useState } from "react";
import { Child } from "./Child";

export const UseCallbackHook = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hi, everyone!!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div>
      <h1>UseCallback Hook</h1>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Tooggle
      </button>
      {toggle && <h1> toggle </h1>}
    </div>
  );
};
