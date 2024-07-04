import { Button } from "./Button/Button";
import { useRef } from "react";

export const UseImperativeHandleHook = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>UseImperativeHandleHook</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};
